import { Link } from 'react-router-dom';
import { Moon, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center space-x-2 text-2xl font-serif font-bold text-slate-100 mb-6">
                            <Moon className="w-6 h-6 text-accent-indigo" />
                            <span>Luna Evolution</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Compassionate counseling in Texas for individuals, couples, and families.
                            Discover therapy services that support your evolution—one phase at a time.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif font-medium text-slate-100 mb-6">Explore</h4>
                        <ul className="space-y-3">
                            <li><Link to="/about-us" className="text-slate-400 hover:text-accent-teal transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/services" className="text-slate-400 hover:text-accent-teal transition-colors text-sm">Services</Link></li>
                            <li><Link to="/our-team" className="text-slate-400 hover:text-accent-teal transition-colors text-sm">Our Team</Link></li>
                            <li><Link to="/contact-us" className="text-slate-400 hover:text-accent-teal transition-colors text-sm">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Legal / Book */}
                    <div>
                        <h4 className="text-lg font-serif font-medium text-slate-100 mb-6">Resources</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://lecportal.mahlerhealth.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent-teal transition-colors text-sm">
                                    Client Portal
                                </a>
                            </li>
                            <li>
                                <a href="https://lecportal.mahlerhealth.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent-teal transition-colors text-sm">
                                    Book Consultation
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-serif font-medium text-slate-100 mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-slate-400 text-sm">
                                <Phone className="w-5 h-5 text-accent-indigo shrink-0" />
                                <span>210-560-0555</span>
                            </li>
                            <li className="flex items-start space-x-3 text-slate-400 text-sm">
                                <Mail className="w-5 h-5 text-accent-indigo shrink-0" />
                                <a href="mailto:gethelp@lunaevolutioncounseling.com" className="hover:text-accent-teal transition-colors">
                                    gethelp@lunaevolutioncounseling.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} Luna Evolution Counseling. All rights reserved.</p>
                    <div className="mt-4 md:mt-0">
                        <span className="block md:inline">Designed professionally.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
