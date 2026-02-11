/* --- GOOGLE AUTH UTILITIES (Silent Refresh & Token Management) --- */

/**
 * Silent Token Refresh & Expiration Management
 * Prevents frequent manual re-authentication by automatically renewing tokens
 * in the background when possible, falling back to consent popup if needed.
 */

// Token expiration check with 100s buffer
const TOKEN_BUFFER_SECONDS = 100;

/**
 * Refreshes the Google access token
 * @param {boolean} silent - If true, attempts silent refresh (no popup). If false, shows consent screen.
 * @returns {Promise<object>} Token response
 */
export const refreshAuthToken = async (silent = true) => {
    // Ensure tokenClient is initialized
    if (!window.tokenClient) {
        throw new Error('Token client not initialized. Call initCalendarClient first.');
    }

    return new Promise((resolve, reject) => {
        window.tokenClient.callback = (resp) => {
            if (resp.error) {
                // If silent refresh failed and we haven't tried consent yet, retry with consent
                if (silent) {
                    console.log('🔄 Silent refresh failed, requesting consent...');
                    refreshAuthToken(false)
                        .then(resolve)
                        .catch(reject);
                } else {
                    console.error('❌ Token refresh failed:', resp.error);
                    reject(resp);
                }
            } else {
                // Store token in gapi client
                window.gapi.client.setToken(resp);

                // Calculate expiration timestamp (now + expires_in - buffer)
                const expiresAt = Date.now() + ((resp.expires_in - TOKEN_BUFFER_SECONDS) * 1000);
                sessionStorage.setItem('gapi_token_expires_at', expiresAt.toString());

                console.log(`✅ Token refreshed (expires in ${Math.floor((expiresAt - Date.now()) / 1000 / 60)}min)`);
                resolve(resp);
            }
        };

        // Silent refresh: prompt = '' (no UI if active session exists)
        // Consent: prompt = 'consent' (shows Google sign-in popup)
        window.tokenClient.requestAccessToken({ prompt: silent ? '' : 'consent' });
    });
};

/**
 * Checks if the current token is expired
 * @returns {boolean} True if token is expired or missing
 */
export const isTokenExpired = () => {
    const expiresAt = sessionStorage.getItem('gapi_token_expires_at');
    if (!expiresAt) return true;

    const expiryTime = parseInt(expiresAt, 10);
    const now = Date.now();

    return now > expiryTime;
};

/**
 * Ensures a valid token exists before making API calls
 * Automatically refreshes if expired or missing
 * @returns {Promise<void>}
 */
export const ensureValidToken = async () => {
    const hasToken = window.gapi?.client?.getToken();

    if (!hasToken) {
        console.log('🔒 No token found, requesting...');
        await refreshAuthToken(true);
    } else if (isTokenExpired()) {
        console.log('🔄 Token expired, refreshing...');
        await refreshAuthToken(true);
    } else {
        console.log('✅ Token valid');
    }
};

/**
 * Gets the current token expiration time in milliseconds
 * @returns {number|null} Expiration timestamp or null if not set
 */
export const getTokenExpiration = () => {
    const expiresAt = sessionStorage.getItem('gapi_token_expires_at');
    return expiresAt ? parseInt(expiresAt, 10) : null;
};
