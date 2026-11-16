import { createElement } from 'react';
import { Cloud, Code2, Database, GitBranch, Layers3, Smartphone } from 'lucide-react';

const groups = [
    { title: 'Frontend', icon: Code2, skills: ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { title: 'Backend', icon: Layers3, skills: ['Node.js', 'Express.js', 'Python', 'FastAPI'] },
    { title: 'Mobile', icon: Smartphone, skills: ['React Native', 'Expo'] },
    { title: 'Database', icon: Database, skills: ['DynamoDB', 'MongoDB', 'Firebase', 'Firestore'] },
    { title: 'Cloud & auth', icon: Cloud, skills: ['AWS Cognito', 'AWS'] },
    { title: 'Tools & workflow', icon: GitBranch, skills: ['Git', 'GitHub', 'Docker', 'GitHub Actions', 'Redux'] },
];

const SkillsSection = () => (
    <section className="section" id="skills">
        <div className="section-wrap">
            <div className="section-heading">
                <span className="section-kicker">Technical skills</span>
                <h2>Tools I use to bring ideas to life</h2>
                <p>A broad, practical toolkit across web, mobile, backend services, and delivery.</p>
            </div>
            <div className="skills-grid">
                {groups.map(({ title, icon: Icon, skills }) => (
                    <article className="surface-card skill-card" key={title}>
                        <div className="card-icon">{createElement(Icon, { size: 18, 'aria-hidden': true })}</div>
                        <h3>{title}</h3>
                        <div className="skill-tags">
                            {skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default SkillsSection;
