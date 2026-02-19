import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="bg-slate-900 min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-50 mb-6">
                        The Heart Behind Luna
                    </h1>
                </motion.div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="prose prose-lg prose-invert mx-auto"
                    >
                        <p className="text-slate-300 leading-relaxed text-xl mb-12 text-center">
                            We combine evidence-based therapeutic techniques with a compassionate, client-centered approach to help our clients thrive in every area of life. Whether you're navigating a life transition, relationship challenge, or simply working on becoming the best version of yourself, we’re here to walk with you—one phase at a time.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
                            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                                <h3 className="text-2xl font-serif font-bold text-accent-indigo mb-4">Our Mission</h3>
                                <p className="text-slate-300">
                                    Luna Evolution Counseling was founded on the belief that transformation is not a destination—it’s a lifelong journey. Our mission is to empower individuals and families to embrace that journey with confidence, resilience, and purpose.
                                </p>
                            </div>

                            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                                <h3 className="text-2xl font-serif font-bold text-accent-teal mb-4">Our Values</h3>
                                <div className="flex flex-wrap gap-2 text-slate-300">
                                    {['Empathy', 'Flexibility', 'Equality', 'Humor', 'Respect', 'Integrity', 'Gratitude'].map((value) => (
                                        <span key={value} className="px-3 py-1 bg-slate-700 rounded-full text-sm">
                                            {value}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="text-center bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-3xl mt-16">
                            <h2 className="text-3xl font-serif font-bold text-slate-50 mb-6">Counseling Services</h2>
                            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                                Our therapy is tailored to meet you where you are—with tools and strategies that fit your goals.
                            </p>
                            <a
                                href="/services"
                                className="inline-block px-8 py-3 bg-accent-indigo text-white rounded-full font-medium hover:bg-accent-indigo/90 transition-colors"
                            >
                                Learn More
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
