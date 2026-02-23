import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Mail, UserPlus, ArrowRight, ShieldCheck, Info } from 'lucide-react';
import Logo from '../components/Logo';

const Login = () => {
    const [loginMode, setLoginMode] = useState('returning'); // returning, pin, enrolling

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const renderForm = () => {
        switch (loginMode) {
            case 'returning':
                return (
                    <motion.div
                        key="returning"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-serif font-bold text-white text-center mb-6">Returning Client</h3>
                        <div className="space-y-4 max-w-sm mx-auto">
                            <div>
                                <label className="block text-slate-400 text-sm font-medium mb-1.5 ml-1 text-center">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-indigo transition-all placeholder-slate-600"
                                    placeholder="jane@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-400 text-sm font-medium mb-1.5 ml-1 text-center">Password</label>
                                <input
                                    type="password"
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-indigo transition-all placeholder-slate-600"
                                    placeholder="••••••••"
                                />
                            </div>
                            <button className="w-full py-3 bg-gradient-to-r from-accent-indigo to-accent-purple text-white font-bold rounded-xl shadow-lg hover:shadow-accent-indigo/20 transition-all transform hover:-translate-y-0.5">
                                Sign In
                            </button>
                            <div className="text-center">
                                <button className="text-accent-teal text-sm hover:underline font-medium">Forgot Password?</button>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'pin':
                return (
                    <motion.div
                        key="pin"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-serif font-bold text-white text-center mb-6">First Time with PIN*</h3>
                        <div className="space-y-4 max-w-sm mx-auto">
                            <div>
                                <label className="block text-slate-400 text-sm font-medium mb-1.5 ml-1 text-center">6-Digit PIN</label>
                                <input
                                    type="text"
                                    maxLength="6"
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-center text-2xl tracking-[0.5em] text-accent-indigo font-bold focus:outline-none focus:ring-2 focus:ring-accent-indigo transition-all placeholder-slate-700"
                                    placeholder="000000"
                                />
                            </div>
                            <div className="bg-blue-900/20 border border-blue-500/20 p-4 rounded-xl flex items-start space-x-3">
                                <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                <p className="text-xs text-blue-200/70 leading-relaxed">
                                    Your PIN was sent via email or text. If you can't find it, please contact your therapist.
                                </p>
                            </div>
                            <button className="w-full py-3 bg-gradient-to-r from-accent-indigo to-accent-purple text-white font-bold rounded-xl shadow-lg hover:shadow-accent-indigo/20 transition-all transform hover:-translate-y-0.5">
                                Verify PIN
                            </button>
                        </div>
                    </motion.div>
                );
            case 'enrolling':
                return (
                    <motion.div
                        key="enrolling"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-serif font-bold text-white text-center mb-2">New Client Enrollment</h3>
                        <p className="text-slate-400 text-sm text-center mb-6">Choose how you would like to proceed</p>

                        <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
                            <button className="p-6 bg-slate-900/50 border border-white/10 rounded-2xl hover:bg-slate-800/80 hover:border-accent-indigo transition-all text-left flex items-center group">
                                <div className="p-3 bg-accent-indigo/20 rounded-lg text-accent-indigo mr-4 group-hover:scale-110 transition-transform">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <div className="text-white font-bold">Enroll as Individual</div>
                                    <div className="text-slate-400 text-xs mt-1 font-light">Self-enrollment for adult counseling.</div>
                                </div>
                            </button>

                            <button className="p-6 bg-slate-900/50 border border-white/10 rounded-2xl hover:bg-slate-800/80 hover:border-accent-purple transition-all text-left flex items-center group">
                                <div className="p-3 bg-accent-purple/20 rounded-lg text-accent-purple mr-4 group-hover:scale-110 transition-transform">
                                    <UserPlus size={24} />
                                </div>
                                <div>
                                    <div className="text-white font-bold">Enroll for Another</div>
                                    <div className="text-slate-400 text-xs mt-1 font-light">Parents/Guardians enrolling minors.</div>
                                </div>
                            </button>
                        </div>

                        <div className="max-w-xs mx-auto text-[10px] text-slate-500 text-center leading-relaxed">
                            By proceeding, you agree to our <span className="text-accent-teal hover:underline cursor-pointer">Terms of Use</span> and privacy policies.
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col relative overflow-hidden">
            {/* Background Image - Synced with Main Site */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Ethereal Nebula Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90"></div>
            </div>

            {/* Header */}
            <header className="relative z-10 py-6 px-12">
                <div className="container mx-auto flex justify-center">
                    <Logo className="h-10 text-white" textClassName="text-xl" />
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex-grow flex items-center justify-center p-4">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="w-full max-w-2xl"
                >
                    {/* Glass Card */}
                    <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden">
                        <div className="p-8 md:p-12">
                            <h2 className="text-sm tracking-[0.3em] uppercase text-blue-300 font-bold text-center mb-8 opacity-80">
                                Client Portal Login
                            </h2>

                            {/* Mode Selection */}
                            <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 max-w-md mx-auto">
                                <button
                                    onClick={() => setLoginMode('returning')}
                                    className={`flex flex-col items-center group transition-all ${loginMode === 'returning' ? 'scale-110' : 'opacity-60 grayscale'}`}
                                >
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${loginMode === 'returning' ? 'bg-accent-indigo shadow-[0_0_20px_rgba(99,102,241,0.5)] text-white' : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'}`}>
                                        <Users size={28} />
                                    </div>
                                    <span className="text-white mt-3 text-xs md:text-sm font-medium tracking-wide">Returning</span>
                                </button>

                                <button
                                    onClick={() => setLoginMode('pin')}
                                    className={`flex flex-col items-center group transition-all ${loginMode === 'pin' ? 'scale-110' : 'opacity-60 grayscale'}`}
                                >
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${loginMode === 'pin' ? 'bg-accent-indigo shadow-[0_0_20px_rgba(99,102,241,0.5)] text-white' : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'}`}>
                                        <ShieldCheck size={28} />
                                    </div>
                                    <span className="text-white mt-3 text-xs md:text-sm font-medium tracking-wide">with PIN*</span>
                                </button>

                                <button
                                    onClick={() => setLoginMode('enrolling')}
                                    className={`flex flex-col items-center group transition-all ${loginMode === 'enrolling' ? 'scale-110' : 'opacity-60 grayscale'}`}
                                >
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${loginMode === 'enrolling' ? 'bg-accent-indigo shadow-[0_0_20px_rgba(99,102,241,0.5)] text-white' : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'}`}>
                                        <UserPlus size={28} />
                                    </div>
                                    <span className="text-white mt-3 text-xs md:text-sm font-medium tracking-wide">Enrolling</span>
                                </button>
                            </div>

                            {/* Forms with Animation */}
                            <div className="relative overflow-hidden min-h-[350px]">
                                <AnimatePresence mode="wait">
                                    {renderForm()}
                                </AnimatePresence>
                            </div>

                            <p className="text-center text-slate-500 text-[10px] mt-8 tracking-widest uppercase opacity-60">
                                *PIN is required for first-time login or identity verification.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <button className="text-slate-400 text-sm hover:text-white transition-colors flex items-center justify-center mx-auto group">
                            <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            Back to Home Site
                        </button>
                    </div>
                </motion.div>
            </main>

            {/* Footer space matching screenshot aesthetic but visually dark */}
            <footer className="relative z-10 h-16 bg-slate-950/50 backdrop-blur-md border-t border-white/5"></footer>
        </div>
    );
};

export default Login;
