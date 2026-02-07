import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from './ui/Button.jsx';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    handleReload = () => {
        window.location.reload();
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center p-6 h-full min-h-[50vh] text-center animate-fade-in">
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-full mb-4">
                        <AlertTriangle size={40} className="text-red-500" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Oups, une erreur est survenue !</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-xs">
                        L'application a rencontré un problème inattendu. Ne vous inquiétez pas, vos données sont en sécurité.
                    </p>

                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded text-left text-xs font-mono text-red-500 mb-6 w-full max-w-sm overflow-auto max-h-32">
                        {this.state.error && this.state.error.toString()}
                    </div>

                    <Button onClick={this.handleReload} icon={RefreshCw} className="shadow-lg">
                        Recharger l'application
                    </Button>
                </div>
            );
        }

        return this.props.children;
    }
}
