import React from 'react';
import './VisualEngine.css';

const VisualEngine = ({ type }) => {

    // Abstract Document/ID Scanner
    if (type === 'document') {
        return (
            <div className="visual-engine type-document">
                <div className="doc-card">
                    <div className="doc-avatar"></div>
                    <div className="doc-lines">
                        <div className="doc-line l1"></div>
                        <div className="doc-line l2"></div>
                    </div>
                </div>
                <div className="scanner-laser"></div>
                <div className="scanner-particles">
                    <div className="sp p1"></div>
                    <div className="sp p2"></div>
                    <div className="sp p3"></div>
                </div>
            </div>
        );
    }

    // Abstract Network Nodes (e.g., Travel Rule, Multi-Accounting)
    if (type === 'network') {
        return (
            <div className="visual-engine type-network">
                <div className="node central-node"></div>
                <div className="node node-1"></div>
                <div className="node node-2"></div>
                <div className="node node-3"></div>
                <div className="node node-4"></div>
                <div className="connection line-1"></div>
                <div className="connection line-2"></div>
                <div className="connection line-3"></div>
                <div className="connection line-4"></div>
            </div>
        );
    }

    // Abstract Shield (Fraud, AML)
    if (type === 'shield') {
        return (
            <div className="visual-engine type-shield">
                <div className="shield-body">
                    <div className="shield-glow"></div>
                    <svg viewBox="0 0 100 100" className="shield-svg">
                        <path d="M50 5 L90 20 L90 50 C90 75 65 90 50 95 C35 90 10 75 10 50 L10 20 Z" fill="none" stroke="#38bdf8" strokeWidth="4" />
                    </svg>
                </div>
                <div className="defense-ring r1"></div>
                <div className="defense-ring r2"></div>
            </div>
        );
    }

    // Abstract Facial Biometrics
    if (type === 'face') {
        return (
            <div className="visual-engine type-face">
                <div className="face-silhouette">
                    <div className="eye left"></div>
                    <div className="eye right"></div>
                </div>
                <div className="biometric-mesh"></div>
                <div className="scan-bar"></div>
            </div>
        );
    }

    // Core / Server processing (Transaction Monitoring)
    if (type === 'core') {
        return (
            <div className="visual-engine type-core">
                <div className="core-cylinder top"></div>
                <div className="core-cylinder mid"></div>
                <div className="core-cylinder btm"></div>

                <div className="data-stream s1"></div>
                <div className="data-stream s2"></div>
                <div className="data-stream s3"></div>
            </div>
        );
    }

    // Fallback
    return <div className="visual-engine fallback"></div>;
};

export default VisualEngine;
