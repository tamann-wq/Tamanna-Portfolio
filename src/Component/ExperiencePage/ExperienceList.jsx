import { ArrowLeft, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SkillsSection from '../SkillsSection';
import ExperienceSection from '../ExperienceSection';

const ExperienceList = () => (
    <main>
        <div className="section" id="skills">
            <SkillsSection />
        </div>
        <ExperienceSection />
        <div className="section">
            <div className="section-wrap" style={{ textAlign: 'center' }}>
                <Link className="button button-secondary" to="/">
                    <ArrowLeft size={15} aria-hidden="true" /> Back to home
                </Link>
                <span className="fact-chip" style={{ marginLeft: 12 }}><Code2 size={13} /> React · Web · Mobile</span>
            </div>
        </div>
    </main>
);

export default ExperienceList;
