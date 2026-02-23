import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../supabaseClient';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        try {
            const { error } = await supabase
                .from('contact_submissions')
                .insert([
                    {
                        first_name: formData.firstName,
                        last_name: formData.lastName,
                        email: formData.email,
                        message: formData.message
                    }
                ]);

            if (error) throw error;

            setStatus('success');
            setFormData({ firstName: '', lastName: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMsg(error.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <div className="bg-slate-900 min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-50 mb-4">Contact Us</h1>
                    <p className="text-slate-400">We're happy to answer any questions you may have.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-800 p-8 rounded-2xl border border-slate-700 h-full"
                    >
                        <h3 className="text-2xl font-serif font-bold text-white mb-8">Get In Touch</h3>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-slate-700 p-3 rounded-lg">
                                    <Phone className="w-6 h-6 text-accent-indigo" />
                                </div>
                                <div>
                                    <h4 className="text-slate-200 font-medium mb-1">Call Us</h4>
                                    <p className="text-slate-400">210-560-0555</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-slate-700 p-3 rounded-lg">
                                    <Mail className="w-6 h-6 text-accent-purple" />
                                </div>
                                <div>
                                    <h4 className="text-slate-200 font-medium mb-1">Send Us an Email</h4>
                                    <a href="mailto:gethelp@lunaevolutioncounseling.com" className="text-accent-teal hover:underline transition-all">
                                        gethelp@lunaevolutioncounseling.com
                                    </a>
                                </div>
                            </div>

                            <div className="mt-12 p-6 bg-slate-900/50 rounded-xl border border-slate-700/50">
                                <p className="text-slate-300 text-sm italic">
                                    "The journey of a thousand miles begins with a single step."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
                    >
                        <h3 className="text-2xl font-serif font-bold text-white mb-6">Send a Message</h3>

                        {status === 'success' ? (
                            <div className="bg-emerald-900/30 border border-emerald-500/50 p-6 rounded-xl text-center">
                                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                                <h4 className="text-white font-bold mb-2">Message Sent!</h4>
                                <p className="text-emerald-200/80 text-sm">Thank you for reaching out. We'll get back to you soon.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-6 text-emerald-400 hover:text-emerald-300 text-sm font-medium"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-slate-400 mb-1">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo transition-all"
                                            placeholder="Jane"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-slate-400 mb-1">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo transition-all"
                                        placeholder="jane@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo transition-all"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-center space-x-2 text-rose-400 text-sm bg-rose-900/20 border border-rose-500/30 p-3 rounded-lg">
                                        <AlertCircle className="w-4 h-4" />
                                        <span>{errorMsg}</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-gradient-to-r from-accent-indigo to-accent-purple text-white font-medium py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                    <Send className="ml-2 w-4 h-4" />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
