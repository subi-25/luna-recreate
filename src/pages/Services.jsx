import { motion } from 'framer-motion';
import { ArrowRight, Activity, Users, Heart, Smile } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Individual Therapy",
            icon: <Activity className="w-8 h-8 text-accent-indigo" />,
            desc: "You don’t have to go through it alone. We offer one-on-one therapy for adults, teens, and children navigating anxiety, depression, trauma, identity exploration, grief, stress, or life transitions. Our approach is tailored to your goals, helping you build resilience, self-awareness, and emotional well-being—at your pace, in your way."
        },
        {
            title: "Couples Counseling",
            icon: <Heart className="w-8 h-8 text-accent-purple" />,
            desc: "Relationships evolve—and so can the way you connect. Our couples therapy sessions create a safe space for deeper communication, conflict resolution, and emotional intimacy. Whether you're rebuilding trust, navigating major decisions, or simply feeling disconnected, we help all couples reconnect with purpose and clarity."
        },
        {
            title: "Family Therapy",
            icon: <Users className="w-8 h-8 text-accent-teal" />,
            desc: "Healing happens together. We support families facing change, communication challenges, or emotional strain. Whether it’s parenting struggles, blended family dynamics, or generational trauma, we help family members understand each other better, build stronger bonds, and create a healthier home environment."
        },
        {
            title: "Child & Adolescent Therapy",
            icon: <Smile className="w-8 h-8 text-pink-400" />,
            desc: "Support for growing minds and hearts. Kids and teens face unique emotional challenges—from school pressures to identity development. We provide age-appropriate therapy to help them express emotions, build coping skills, and grow with confidence, while keeping parents involved in meaningful ways."
        }
    ];

    return (
        <div className="bg-slate-900 min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-50 mb-6">
                        Counseling Services for Every Life Phase
                    </h1>
                    <p className="text-slate-300 text-lg">
                        We believe every phase of life deserves support. Whether you're seeking personal growth, navigating a relationship challenge, or supporting a child through change, our team is here to help with evidence-based, compassionate care.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-slate-800/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-slate-700 hover:border-slate-600 transition-colors flex flex-col md:flex-row gap-8 items-start"
                        >
                            <div className="bg-slate-900 p-4 rounded-xl shadow-lg shrink-0">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-slate-100 mb-4">{service.title}</h3>
                                <p className="text-slate-300 leading-relaxed text-lg">{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center bg-gradient-to-r from-slate-900 to-slate-800 p-12 rounded-3xl border border-slate-700"
                >
                    <h2 className="text-3xl font-serif font-bold text-white mb-6">We Will Guide You Through It</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        We’re here to guide you. If you're unsure which service is right for you or your loved one, schedule a free consultation. We’ll listen, learn your needs, and help you take the next step with confidence.
                    </p>
                    <a
                        href="https://lecportal.mahlerhealth.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-accent-indigo to-accent-purple text-white rounded-full font-medium hover:opacity-90 transition-opacity"
                    >
                        Book Your Consultation
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
