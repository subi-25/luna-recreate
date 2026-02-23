import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about-us' },
        { name: 'Services', path: '/services' },
        { name: 'Our Team', path: '/our-team' },
        { name: 'Contact Us', path: '/contact-us' },
        { name: 'Client Portal', path: '/portal-login' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <Logo className="h-10 w-auto" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm tracking-wide transition-colors duration-200 hover:text-accent-teal ${location.pathname === link.path ? 'text-accent-teal font-medium' : 'text-slate-300'}`}
                        >
                            {link.name.toUpperCase()}
                        </Link>
                    ))}
                    <a
                        href="https://lecportal.mahlerhealth.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-gradient-to-r from-accent-indigo to-accent-purple text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                        Book Consultation
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-100"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-t border-slate-800 overflow-hidden"
                    >
                        <nav className="flex flex-col p-4 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-base block ${location.pathname === link.path ? 'text-accent-teal' : 'text-slate-300'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://lecportal.mahlerhealth.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center px-6 py-3 bg-gradient-to-r from-accent-indigo to-accent-purple text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                            >
                                Book Consultation
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
