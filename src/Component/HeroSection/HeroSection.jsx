import { ArrowDownRight, ArrowUpRight, Code2, Download, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const portraitUrl = `${import.meta.env.BASE_URL}img/Tamanna.jpeg`;
const resumeUrl = `${import.meta.env.BASE_URL}img/Tamanna_Mishra_Resume.pdf`;

const HeroSection = () => (
    <section className="hero" id="home">
        <div className="hero-wrap hero-grid">
            <div>
                <div className="eyebrow">
                    <span className="availability-dot" aria-hidden="true" />
                    Available to join immediately · Bilaspur, Chhattisgarh, India
                </div>
                <h1>Hi, I’m Tamanna <span>Mishra</span></h1>
                <p className="hero-title">Frontend Developer Building Modern Web Experiences</p>
                <p className="hero-copy">
                    I build thoughtful, responsive interfaces with React and modern web technologies.
                    With a frontend internship and a strong foundation in analytical problem-solving,
                    I care about making digital products intuitive, accessible, and reliable.
                </p>
                <div className="hero-cta">
                    <Link className="button button-primary" to="/portfolio">
                        View my projects <ArrowDownRight size={16} aria-hidden="true" />
                    </Link>
                    <a className="button button-secondary" href={resumeUrl} download>
                        <Download size={15} aria-hidden="true" /> Download resume
                    </a>
                </div>
                <div className="social-row" aria-label="Social profiles">
                    <a className="social-link" href="https://github.com/tamann-wq" target="_blank" rel="noreferrer">
                        <Github size={15} aria-hidden="true" /> GitHub <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                    <a className="social-link" href="mailto:mishratamanna210@gmail.com">
                        <Mail size={15} aria-hidden="true" /> Email me
                    </a>
                </div>
            </div>

            <div className="portrait-wrap">
                <div className="portrait-frame">
                    <img src={portraitUrl} alt="Tamanna Mishra" />
                </div>
                <div className="portrait-badge">
                    <div className="portrait-badge-icon"><Code2 size={18} aria-hidden="true" /></div>
                    <div>
                        <strong>Frontend engineering</strong>
                        <span>React · TypeScript · UI</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;
