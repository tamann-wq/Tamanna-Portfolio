import { BriefcaseBusiness, GraduationCap, MapPin, Sparkles } from 'lucide-react';

const AboutSection = () => (
    <section className="section section-muted" id="about">
        <div className="section-wrap">
            <div className="section-heading">
                <span className="section-kicker">A little about me</span>
                <h2>Curious by nature. Thoughtful in how I build.</h2>
                <p>
                    I’m a frontend developer who enjoys turning complex ideas into clear, engaging
                    experiences. I bring a mathematical perspective to problem-solving and a
                    practical focus on the people using what I build.
                </p>
            </div>

            <div className="about-grid">
                <article className="surface-card about-card">
                    <h3><Sparkles size={17} className="inline-icon" aria-hidden="true" /> Building for the web</h3>
                    <p>
                        I have six months of frontend development experience from my internship at
                        Code Fusion Infotech. I’m especially interested in React and frontend
                        engineering, and I enjoy working across responsive UI, reusable components,
                        and API-connected experiences.
                    </p>
                    <div className="about-facts">
                        <span className="fact-chip"><BriefcaseBusiness size={13} /> 6-month internship</span>
                        <span className="fact-chip"><MapPin size={13} /> Bengaluru, India</span>
                        <span className="fact-chip"><span className="availability-dot" /> Available immediately</span>
                    </div>
                </article>

                <article className="surface-card about-card">
                    <h3><GraduationCap size={18} className="inline-icon" aria-hidden="true" /> Education</h3>
                    <div className="education-card">
                        <div className="card-icon"><GraduationCap size={18} aria-hidden="true" /></div>
                        <div>
                            <h4>Master of Computer Applications</h4>
                            <p>Computer Science · Currently pursuing</p>
                            <span>Expected 2028</span>
                        </div>
                    </div>
                    <div className="education-card">
                        <div className="card-icon"><GraduationCap size={18} aria-hidden="true" /></div>
                        <div>
                            <h4>B.Sc. Mathematics</h4>
                            <p>Completed 2026</p>
                            <span>A foundation in analytical and logical thinking</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
);

export default AboutSection;
