import React from 'react';
import { motion } from 'framer-motion';
import { AlertOctagon, RotateCcw } from 'lucide-react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service here (e.g., Sentry)
        console.error("ErrorBoundary caught an error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    padding: '2rem',
                    backgroundColor: '#f8fafc',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            maxWidth: '500px',
                            background: 'white',
                            padding: '3rem',
                            borderRadius: '16px',
                            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
                            textAlign: 'center'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', color: '#ef4444' }}>
                            <AlertOctagon size={64} />
                        </div>
                        <h1 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '1rem', fontWeight: 'bold' }}>
                            Something went wrong
                        </h1>
                        <p style={{ color: '#64748b', marginBottom: '2rem', lineHeight: '1.6' }}>
                            We apologize for the inconvenience. Our technical team has been notified. Please try refreshing the page.
                        </p>

                        {process.env.NODE_ENV === 'development' && (
                            <div style={{ textAlign: 'left', background: '#fef2f2', padding: '1rem', borderRadius: '8px', marginBottom: '2rem', overflowX: 'auto' }}>
                                <p style={{ color: '#991b1b', fontWeight: '600', marginBottom: '0.5rem' }}>{this.state.error && this.state.error.toString()}</p>
                                <pre style={{ fontSize: '0.75rem', color: '#ef4444' }}>
                                    {this.state.errorInfo && this.state.errorInfo.componentStack}
                                </pre>
                            </div>
                        )}

                        <button
                            onClick={() => window.location.reload()}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.875rem 2rem',
                                background: '#0f172a',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'background 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.background = '#334155'}
                            onMouseOut={(e) => e.currentTarget.style.background = '#0f172a'}
                        >
                            <RotateCcw size={18} />
                            Refresh Page
                        </button>
                    </motion.div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
