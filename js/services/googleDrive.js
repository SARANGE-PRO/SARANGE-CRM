/* --- GOOGLE DRIVE SERVICE --- */

import { initCalendarClient } from '../utils/googleCalendar.js';
import { ensureValidToken } from '../utils/googleAuth.js';

/**
 * Demande un token d'accès si nécessaire (auto-refresh if expired)
 */
const ensureAuthenticated = async () => {
    await initCalendarClient();
    await ensureValidToken(); // Auto-refresh if expired
};

/**
 * Recherche ou crée un dossier dans Drive
 * @param {string} folderName - Nom du dossier
 * @param {string} parentId - ID du parent (default: 'root')
 * @returns {Promise<string>} ID du dossier
 */
export const getOrCreateFolder = async (folderName, parentId = 'root') => {
    await ensureAuthenticated();

    // 1. Rechercher le dossier existant
    const query = `name='${folderName}' and mimeType='application/vnd.google-apps.folder' and '${parentId}' in parents and trashed=false`;

    try {
        const response = await window.gapi.client.drive.files.list({
            q: query,
            fields: 'files(id, name)',
            spaces: 'drive'
        });

        const files = response.result.files;

        if (files && files.length > 0) {
            console.log(`📁 Dossier "${folderName}" trouvé: ${files[0].id}`);
            return files[0].id;
        }

        // 2. Créer le dossier s'il n'existe pas
        const createResponse = await window.gapi.client.drive.files.create({
            resource: {
                name: folderName,
                mimeType: 'application/vnd.google-apps.folder',
                parents: [parentId]
            },
            fields: 'id'
        });

        console.log(`📁 Dossier "${folderName}" créé: ${createResponse.result.id}`);
        return createResponse.result.id;

    } catch (error) {
        console.error("Erreur getOrCreateFolder:", error);
        throw error;
    }
};

/**
 * Upload un fichier vers Drive (Multipart Upload)
 * @param {Blob} blob - Le fichier à uploader
 * @param {string} filename - Nom du fichier
 * @param {string} mimeType - Type MIME
 * @param {string} parentFolderId - ID du dossier parent
 * @returns {Promise<string>} ID du fichier créé
 */
export const uploadFile = async (blob, filename, mimeType, parentFolderId) => {
    await ensureAuthenticated();

    const accessToken = window.gapi.client.getToken().access_token;

    // Métadonnées du fichier
    const metadata = {
        name: filename,
        mimeType: mimeType,
        parents: [parentFolderId]
    };

    // Construction de la requête multipart
    const boundary = '-------314159265358979323846';
    const delimiter = "\r\n--" + boundary + "\r\n";
    const close_delim = "\r\n--" + boundary + "--";

    const reader = new FileReader();

    return new Promise((resolve, reject) => {
        reader.readAsBinaryString(blob);
        reader.onload = async () => {
            const multipartRequestBody =
                delimiter +
                'Content-Type: application/json\r\n\r\n' +
                JSON.stringify(metadata) +
                delimiter +
                'Content-Type: ' + mimeType + '\r\n' +
                'Content-Transfer-Encoding: base64\r\n\r\n' +
                btoa(reader.result) +
                close_delim;

            try {
                const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + accessToken,
                        'Content-Type': 'multipart/related; boundary="' + boundary + '"'
                    },
                    body: multipartRequestBody
                });

                if (!response.ok) {
                    throw new Error(`Upload failed: ${response.statusText}`);
                }

                const result = await response.json();
                console.log(`☁️ Fichier "${filename}" uploadé: ${result.id}`);
                resolve(result.id);
            } catch (error) {
                console.error("Erreur uploadFile:", error);
                reject(error);
            }
        };

        reader.onerror = (error) => reject(error);
    });
};

/**
 * Liste les fichiers dans un dossier Drive
 * @param {string} folderId - ID du dossier
 * @returns {Promise<Array>} Liste des fichiers [{id, name, mimeType, webViewLink}]
 */
export const listFilesInFolder = async (folderId) => {
    await ensureAuthenticated();

    try {
        const response = await window.gapi.client.drive.files.list({
            q: `'${folderId}' in parents and trashed=false`,
            fields: 'files(id, name, mimeType, webViewLink, webContentLink, createdTime)',
            orderBy: 'createdTime desc',
            spaces: 'drive'
        });

        return response.result.files || [];
    } catch (error) {
        console.error("Erreur listFilesInFolder:", error);
        throw error;
    }
};

/**
 * Génère une URL de preview/download pour un fichier
 * @param {string} fileId - ID du fichier Drive
 * @returns {object} { viewUrl, downloadUrl }
 */
export const getFileUrl = (fileId) => {
    return {
        viewUrl: `https://drive.google.com/file/d/${fileId}/view`,
        downloadUrl: `https://drive.google.com/uc?export=download&id=${fileId}`,
        embedUrl: `https://drive.google.com/file/d/${fileId}/preview`
    };
};

/**
 * Upload automatique d'un devis vers Drive
 * @param {object} chantier - Objet chantier
 * @param {Blob} pdfBlob - Blob du PDF
 * @param {string} filename - Nom du fichier
 * @returns {Promise<object>} { fileId, folderId }
 */
export const uploadQuoteToDrive = async (chantier, pdfBlob, filename) => {
    try {
        // 1. Créer/Récupérer le dossier racine "SarangePro"
        const rootFolderId = await getOrCreateFolder('SarangePro');

        // 2. Créer/Récupérer le dossier du client
        const sanitizedName = chantier.client?.trim().replace(/[/\\?%*:|"<>]/g, '-');
        const clientFolderName = sanitizedName || `Chantier_${chantier.id?.substring(0, 8) || 'inconnu'}`;
        const clientFolderId = await getOrCreateFolder(clientFolderName, rootFolderId);

        // 3. Upload le PDF
        const fileId = await uploadFile(pdfBlob, filename, 'application/pdf', clientFolderId);

        console.log(`📤 Quote uploaded to Drive: ${filename}`);

        return {
            fileId,
            folderId: clientFolderId,
            filename
        };

    } catch (error) {
        console.error("Erreur uploadQuoteToDrive:", error);
        throw error;
    }
};

/**
 * Récupère tous les devis d'un chantier depuis Drive
 * @param {object} chantier - Objet chantier
 * @returns {Promise<Array>} Liste des devis
 */
export const getChantierQuotes = async (chantier) => {
    try {
        // 1. Créer/Récupérer le dossier racine "SarangePro"
        const rootFolderId = await getOrCreateFolder('SarangePro');

        // 2. Récupérer le dossier du client
        const sanitizedName = chantier.client?.trim().replace(/[/\\?%*:|"<>]/g, '-');
        const clientFolderName = sanitizedName || `Chantier_${chantier.id?.substring(0, 8) || 'inconnu'}`;
        const clientFolderId = await getOrCreateFolder(clientFolderName, rootFolderId);

        // 3. Lister les fichiers
        const files = await listFilesInFolder(clientFolderId);

        return files.map(file => ({
            id: file.id,
            name: file.name,
            mimeType: file.mimeType,
            createdTime: file.createdTime,
            ...getFileUrl(file.id)
        }));

    } catch (error) {
        console.error("Erreur getChantierQuotes:", error);
        return [];
    }
};

/**
 * Downloads a file from Drive as a Blob
 * Used for viewing PDFs in-app when local file is missing
 * @param {string} fileId - ID du fichier Drive
 * @returns {Promise<Blob>} Blob du fichier
 */
export const downloadFileAsBlob = async (fileId) => {
    await ensureAuthenticated();

    const accessToken = window.gapi.client.getToken().access_token;

    try {
        // CRITICAL: Use direct fetch instead of gapi.client to get binary content
        // gapi.client.drive.files.get() returns text/base64 which doesn't work for PDFs
        const response = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error(`Download failed: ${response.statusText}`);
        }

        // Get the binary content as Blob
        const blob = await response.blob();

        console.log(`📥 Downloaded file ${fileId} as Blob (${blob.size} bytes)`);
        return blob;
    } catch (error) {
        console.error("Erreur downloadFileAsBlob:", error);
        throw error;
    }
};
