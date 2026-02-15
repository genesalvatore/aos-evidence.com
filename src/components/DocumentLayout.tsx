import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface DocumentLayoutProps {
    title: string;
    children: React.ReactNode;
}

export default function DocumentLayout({ title, children }: DocumentLayoutProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = `${title} — AOS Evidence Repository`;
    }, [title, location.pathname]);

    return (
        <div className="min-h-screen bg-[var(--canvas)] flex flex-col">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-[var(--canvas)]/90 backdrop-blur border-b border-black/5">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-black hover:opacity-70 transition-opacity">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="M9 12l2 2 4-4" />
                        </svg>
                        AOS Evidence
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600 items-center">
                        <Link to="/" className="hover:text-black transition-colors">Home</Link>
                        <Link to="/verification" className="hover:text-black transition-colors">Verification</Link>
                        <Link to="/about" className="hover:text-black transition-colors">About</Link>

                        <div className="w-px h-4 bg-black/15 mx-1" />
                        <a href="https://aos-governance.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors text-xs font-mono uppercase tracking-wider">Governance</a>
                        <a href="https://aos-foundation.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors text-xs font-mono uppercase tracking-wider">Foundation</a>

                        <a href="https://github.com/genesalvatore/aos-evidence.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-black text-white rounded-md hover:bg-gray-800 transition-colors text-sm">GitHub</a>
                    </div>

                    {/* Mobile toggle */}
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2" aria-label="Toggle menu">
                        <div className="space-y-1.5">
                            <span className={`block w-5 h-0.5 bg-black transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block w-5 h-0.5 bg-black transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`block w-5 h-0.5 bg-black transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-black/5 bg-[var(--canvas)]">
                        <div className="px-6 py-4 space-y-1">
                            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-sm font-medium text-gray-700 hover:text-black transition-colors border-b border-black/5">Home</Link>
                            <Link to="/verification" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-sm font-medium text-gray-700 hover:text-black transition-colors border-b border-black/5">Verification</Link>
                            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-sm font-medium text-gray-700 hover:text-black transition-colors border-b border-black/5">About</Link>
                            <div className="pt-2 flex gap-3 text-xs font-mono uppercase tracking-wider">
                                <a href="https://aos-governance.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black">Governance</a>
                                <a href="https://aos-foundation.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black">Foundation</a>
                            </div>
                            <a href="https://github.com/genesalvatore/aos-evidence.com" target="_blank" rel="noopener noreferrer" className="block mt-3 text-center py-3 bg-black text-white rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors">GitHub</a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Content */}
            <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 md:py-16">
                <div className="mb-6">
                    <Link to="/" className="text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-black transition-colors">← Back to Evidence</Link>
                </div>
                <article className="bg-white rounded-2xl border border-black/5 p-8 md:p-12 shadow-sm doc-content">
                    {children}
                </article>
            </main>

            {/* Footer */}
            <footer className="border-t border-black/5 py-16 mt-auto">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12 mb-12">
                        <div>
                            <p className="font-serif text-xl mb-3">AOS Evidence</p>
                            <p className="text-sm text-gray-500 leading-relaxed">Official evidence repository for the AOS Sovereign Nation. All materials published under verifiable cryptographic anchors.</p>
                        </div>
                        <div>
                            <p className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-4">Documentation</p>
                            <div className="space-y-2">
                                <Link to="/" className="block text-sm text-gray-600 hover:text-black transition-colors">Overview</Link>
                                <Link to="/about" className="block text-sm text-gray-600 hover:text-black transition-colors">About AOS</Link>
                                <Link to="/verification" className="block text-sm text-gray-600 hover:text-black transition-colors">Verification Guide</Link>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-4">Legal</p>
                            <div className="space-y-2">
                                <Link to="/privacy" className="block text-sm text-gray-600 hover:text-black transition-colors">Privacy Policy</Link>
                                <Link to="/terms" className="block text-sm text-gray-600 hover:text-black transition-colors">Terms of Service</Link>
                                <Link to="/cookie-policy" className="block text-sm text-gray-600 hover:text-black transition-colors">Cookie Policy</Link>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 border-t border-black/5 flex flex-wrap justify-between gap-4 text-xs text-gray-400">
                        <span>© 2026 AOS Sovereign Nation · CC BY 4.0</span>
                        <span>Last updated: February 15, 2026</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
