import { BriefcaseBusiness, MapPin } from 'lucide-react';

const ExperienceSection = () => (
    <section className="section section-muted" id="experience">
        <div className="section-wrap">
            <div className="section-heading">
                <span className="section-kicker">Experience</span>
                <h2>Where I’ve grown as a developer</h2>
                <p>Hands-on experience building frontend features as part of a professional team.</p>
            </div>
            <div className="timeline">
                <div className="timeline-entry">
                    <article className="surface-card timeline-card">
                        <div className="timeline-top">
                            <div>
                                <h3>Frontend Developer Intern</h3>
                                <div className="company">Code Fusion Infotech</div>
                            </div>
                            <span className="timeline-date">April 2026 – October 2026</span>
                        </div>
                        <p>
                            Completed a six-month frontend development internship, contributing to
                            responsive web interfaces and product features using modern frontend
                            practices.
                        </p>
                        <ul>
                            <li>Developed and refined user-facing interfaces with a focus on responsive behavior.</li>
                            <li>Worked with React components and frontend application workflows.</li>
                            <li>Collaborated with teammates to translate requirements into usable product experiences.</li>
                        </ul>
                        <div className="about-facts">
                            <span className="fact-chip"><BriefcaseBusiness size={13} /> Internship</span>
                            <span className="fact-chip"><MapPin size={13} />Bilaspur Chhattisgarh, India</span>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
);

export default ExperienceSection;
