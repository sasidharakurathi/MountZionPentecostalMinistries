import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, AlertCircle } from 'lucide-react';

const NotFound = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh',
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: '#fafafa'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                    backgroundColor: 'white',
                    padding: '4rem 3rem',
                    borderRadius: '24px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                    maxWidth: '500px',
                    width: '100%'
                }}
            >
                <div style={{ color: '#e53e3e', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                    <AlertCircle size={64} />
                </div>
                <h1 style={{
                    fontSize: '4rem',
                    fontWeight: '800',
                    color: '#0f172a',
                    margin: '0',
                    lineHeight: '1'
                }}>404</h1>
                <h2 style={{
                    fontSize: '1.5rem',
                    color: '#334155',
                    marginTop: '0.5rem',
                    marginBottom: '1rem',
                    fontWeight: '600'
                }}>Page Not Found</h2>
                <p style={{ color: '#64748b', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                    The page you are looking for doesn't exist or has been moved. Let's get you back on track.
                </p>
                <Link to="/" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1rem 2rem',
                    backgroundColor: '#6366f1',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '99px',
                    fontWeight: '600',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
                }}>
                    <Home size={18} />
                    Go Back Home
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;
