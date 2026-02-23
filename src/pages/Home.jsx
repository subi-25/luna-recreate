import { motion } from 'framer-motion';
import { ArrowRight, User, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="bg-slate-900 min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Background Image - High Quality Nebula */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                        alt="Ethereal Nebula Background"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
                </div>

                <div className="container mx-auto px-4 z-10 text-center relative">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div variants={fadeInUp} className="inline-block mb-6 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
                            <span className="text-blue-200 text-sm font-semibold tracking-[0.2em] uppercase">
                                Welcome to Luna Evolution
                            </span>
                        </motion.div>

                        {/* Glass Card Container for Typography */}
                        <motion.div variants={fadeInUp} className="bg-slate-900/10 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                                Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Evolution</span><br />
                                <span className="text-4xl md:text-6xl italic font-light text-slate-300">One Phase At A Time</span>
                            </h1>

                            <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md">
                                Compassionate counseling in Texas. A sanctuary for your personal growth, healing, and transformation.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                                <Link
                                    to="/portal-login"
                                    className="px-8 py-4 bg-white text-slate-900 rounded-full text-lg font-bold hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1 flex items-center justify-center"
                                >
                                    Start Your Journey
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <Link
                                    to="/services"
                                    className="px-8 py-4 bg-slate-900/50 backdrop-blur-md border border-white/20 text-white rounded-full text-lg font-medium hover:bg-white/10 transition-all flex items-center justify-center"
                                >
                                    Explore Phases
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-slate-900 relative">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-50 mb-8">
                            Evolve with Compassionate Support
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            Luna Evolution Counseling is here to guide your personal growth journey. Our licensed clinicians offer inclusive, compassionate care tailored to your life stage and emotional needs.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Life Moves In Phases. We work with individuals, couples, and families of all ages to create lasting change rooted in trust, connection, and emotional well-being.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Cards Section */}
            <section className="py-24 bg-slate-800/50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Box 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-accent-indigo/50 transition-colors group"
                        >
                            <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-indigo/20 transition-colors">
                                <User className="w-7 h-7 text-accent-indigo" />
                            </div>
                            <h3 className="text-2xl font-serif font-semibold text-slate-50 mb-4">Individuals</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Personalized therapy to help you navigate life’s transitions, manage stress or anxiety, heal from trauma, and grow with confidence—one phase at a time.
                            </p>
                            <Link to="/services" className="text-accent-teal hover:text-accent-emerald text-sm font-medium uppercase tracking-wider flex items-center">
                                Learn More <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                        </motion.div>

                        {/* Box 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-accent-purple/50 transition-colors group"
                        >
                            <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-purple/20 transition-colors">
                                <Users className="w-7 h-7 text-accent-purple" />
                            </div>
                            <h3 className="text-2xl font-serif font-semibold text-slate-50 mb-4">Families</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Support for the entire family unit through life’s changes—improving understanding, resolving conflict, and fostering a more connected home environment.
                            </p>
                            <Link to="/services" className="text-accent-teal hover:text-accent-emerald text-sm font-medium uppercase tracking-wider flex items-center">
                                Learn More <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                        </motion.div>

                        {/* Box 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-accent-teal/50 transition-colors group"
                        >
                            <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-teal/20 transition-colors">
                                <Heart className="w-7 h-7 text-accent-teal" />
                            </div>
                            <h3 className="text-2xl font-serif font-semibold text-slate-50 mb-4">Couples</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Strengthen your relationship through open communication, conflict resolution, and deeper connection. We support all couples in building a healthier bond.
                            </p>
                            <Link to="/services" className="text-accent-teal hover:text-accent-emerald text-sm font-medium uppercase tracking-wider flex items-center">
                                Learn More <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-50 mb-8">
                        Begin Your Next Phase
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Link
                            to="/services"
                            className="px-8 py-3 rounded-full border border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white transition-all text-lg font-medium"
                        >
                            See How We Can Help
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
