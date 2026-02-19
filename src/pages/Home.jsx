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
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black z-0"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-indigo/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

                <div className="container mx-auto px-4 z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} className="text-accent-teal uppercase tracking-[0.2em] mb-4 text-sm font-semibold">
                            Your Evolution
                        </motion.h2>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif font-bold text-slate-50 mb-6 leading-tight">
                            One Phase At A Time
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                            Compassionate counseling in Texas for individuals, couples, and families.
                            Discover therapy services that support your evolution.
                        </motion.p>
                        <motion.div variants={fadeInUp}>
                            <a
                                href="https://lecportal.mahlerhealth.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-indigo to-accent-purple text-white rounded-full text-lg font-medium hover:scale-105 transition-transform shadow-lg shadow-accent-indigo/25"
                            >
                                Book Your Consultation
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
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
