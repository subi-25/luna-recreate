import { motion } from 'framer-motion';

const Team = () => {
    const team = [
        {
            name: "Jessica Sanchez",
            title: "LPC Licensed Professional Counselor",
            image: "https://bc-user-uploads.brandcrowd.com/public/media-Production/13ab75d9-a584-4a93-8828-7db4837af47c/09749510-da40-49ea-8af3-c58630ef6da4_2x",
            bio: "Creating safe spaces for all ages to heal and thrive, my approach integrates cognitive behavioral therapy (CBT), solution-focused strategies, trauma-informed care, and positive psychology to support each client’s unique therapeutic journey. I tailor sessions to individual needs and often incorporate creative modalities such as humor, play, and art techniques to promote engagement and self-expression. I am comfortable providing services in both English and Spanish to ensure accessibility and inclusivity. My goal is to provide a safe, supportive space for healing, growth, and resilience."
        },
        {
            name: "Ashley Holloway",
            title: "LPC Associate Supervised by Miranda Solis, LPC-S",
            image: "https://bc-user-uploads.brandcrowd.com/public/media-Production/13ab75d9-a584-4a93-8828-7db4837af47c/5a6e9e04-693d-4dd5-a829-9540b5f12432_2x",
            bio: "With a deep commitment to supporting emotional wellness, I specialize in helping children, adolescents, and adults navigate anxiety, depression, trauma, life transitions, grief, and more. Drawing from a diverse toolkit of evidence-based and creative therapeutic approaches, I will integrate modalities such as Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Internal Family Systems (IFS/Parts Therapy), Person-Centered Therapy, Solution Focused, Mindfulness, and Art all based on individualistic needs. I will strive to create a safe, supportive environment where clients can explore their emotions and reconnect with their strengths."
        },
        {
            name: "Nicole Joiner",
            title: "LPC Licensed Professional Counselor",
            image: "https://bc-user-uploads.brandcrowd.com/public/media-Production/13ab75d9-a584-4a93-8828-7db4837af47c/04e9180f-2cbf-4da1-831f-810813d35b8c_2x",
            bio: "I am a Licensed Professional Counselor, with a Bachelor's degree in Psychology and a Master's degree in Counseling/Clinical Mental Health Counseling. I work with individuals of all ages, utilizing multiple modalities, including CBT, CPT, and play therapy techniques. I have experience working with individuals with intellectual disabilities and neurodevelopmental disorders. Diagnosis seen include; Anxiety disorders, Depression, ADHD, ASD, Trauma disorders and Personality disorders."
        },
        {
            name: "Danielle Bacharach",
            title: "LPC-Associate Supervised by Gloria Mendez, LPC-S",
            image: "https://bc-user-uploads.brandcrowd.com/public/media-Production/13ab75d9-a584-4a93-8828-7db4837af47c/b491ef1e-1241-43a5-84a7-832636f1bb6f_2x",
            bio: "Danielle Bacharach is an LPC-Associate with a master's degree in Clinical Mental Health Counseling from UTSA. Danielle works with children, adolescents, and adults ranging from ages 5-90 years old. She focuses solely on individual counseling. Danielle has experience working with children on the spectrum, ADHD, ODD, and more. She also has experience working with adolescents/adults struggling with eating disorders, anxiety, and depression. Danielle utilizes cognitive behavioral therapy to target ineffective behaviors, habits, and beliefs."
        },
        {
            name: "Michelle Jay",
            title: "LPC-S",
            image: "https://bc-user-uploads.brandcrowd.com/public/media-Production/13ab75d9-a584-4a93-8828-7db4837af47c/e2c984fe-55cd-4def-9f0e-358212cb3294_2x",
            bio: "Drawing from over 30 years of experience working with children, adults, and families in a variety of settings as both a special education teacher and a licensed professional counselor, I use multiple therapeutic approaches including EMDR, cognitive behavioral and person-centered to provide a supportive and collaborative environment to explore personal growth at a pace and in an environment that suits each person’s unique needs. With a mix of humor, empathy, advocacy, and realness, I strive to create a space that helps you grow, heal, and thrive."
        },
        {
            name: "Cat Reyes, M.Ed.",
            title: "Counseling Intern",
            image: "https://bc-user-uploads.brandcrowd.com/public/media-Production/13ab75d9-a584-4a93-8828-7db4837af47c/9da19adb-4ac2-412e-bfe5-fe07ff4ffa8e_2x",
            bio: "Cat Reyes is a counseling intern who provides client-centered counseling services pro bono under the supervision of a licensed clinician. She is passionate about creating an open, supportive, and nonjudgmental space for clients to explore their thoughts, emotions, and experiences. She believes in meeting people where they are and working together to support growth, healing, and foster self-understanding. Cat's approach is grounded in empathy, connection, and respect for each person’s unique story."
        },
        {
            name: "Cruz Fox",
            title: "LPC-Associate Supervised by Gloria Mendez, LPC-S",
            image: "https://bc-user-uploads.brandcrowd.com/public/media-Production/13ab75d9-a584-4a93-8828-7db4837af47c/d375ae52-1fae-4b5a-b963-983bb8493e89_2x",
            bio: "Cruz Fox is a dedicated Licensed Professional Counselor Associate. (Bio placeholder based on website structure/header)."
        }
    ];

    return (
        <div className="bg-slate-900 min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-50 mb-4">Our Team</h1>
                    <p className="text-slate-400">Meet the dedicated professionals ready to support your journey.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-accent-indigo transition-all hover:shadow-lg hover:shadow-accent-indigo/10 flex flex-col group"
                        >
                            <div className="mb-6 flex flex-col items-center text-center">
                                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-slate-600 group-hover:border-accent-indigo transition-colors shadow-lg">
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    <div className="w-full h-full bg-slate-700 flex items-center justify-center text-slate-400 font-serif text-2xl" style={{ display: member.image ? 'none' : 'flex' }}>
                                        {member.name.charAt(0)}
                                    </div>
                                </div>
                                <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-accent-teal transition-colors">{member.name}</h3>
                                <p className="text-accent-indigo text-sm font-medium h-10 flex items-center justify-center">{member.title}</p>
                            </div>
                            <div className="flex-grow border-t border-slate-700/50 pt-4">
                                <p className="text-slate-300 text-sm leading-relaxed line-clamp-6 hover:line-clamp-none transition-all duration-300 cursor-default text-justify">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
