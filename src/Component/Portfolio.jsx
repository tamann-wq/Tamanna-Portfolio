import { createElement } from 'react';
import { ExternalLink, Smartphone, ShoppingBag, BookOpen, CalendarHeart, Globe2 } from 'lucide-react';

const projects = [
    {
        title: 'Nyota',
        subtitle: 'Family & event management',
        description: 'A cross-platform app for managing events, guests, vendors, tasks, and shared memories.',
        icon: CalendarHeart,
        technologies: ['React Native', 'Expo', 'FastAPI', 'AWS Cognito', 'DynamoDB'],
    },
    {
        title: 'Full-Stack E-Commerce Application',
        subtitle: 'Online shopping experience',
        description: 'A full-stack storefront with product and cart experiences, application state management, and JWT authentication.',
        icon: ShoppingBag,
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'JWT'],
    },
    {
        title: 'Cross-Platform Mobile Application',
        subtitle: 'Connected mobile experience',
        description: 'A mobile app integrating Firebase, Firestore, and REST APIs with push notifications and deep linking.',
        icon: Smartphone,
        technologies: ['React Native', 'Expo', 'Firebase', 'Firestore', 'REST APIs'],
    },
    {
        title: 'Next.js Portfolio & Blog Platform',
        subtitle: 'Content-focused web platform',
        description: 'A typed, responsive platform using server-side and static rendering, deployed on Vercel.',
        icon: BookOpen,
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    },
];

const liveWork = [
    {
        title: 'Rashmi Neuro Hospital',
        description: 'Hospital website for neurology and neurosurgery services.',
        url: 'http://www.rashmineurohospital.in/',
    },
    {
        title: 'Gajmohni Parisar',
        description: 'Residential property and home discovery website.',
        url: 'https://gajmohiniparisar.in/',
    },
    {
        title: 'Atharv Child & Eye Hospital',
        description: 'Website for pediatric and eye-care services.',
        url: 'http://www.atharvhospital.co.in/',
    },
    {
        title: 'Shivam Motors',
        description: 'Automotive dealership website.',
        url: 'https://www.shivammotors.co.in/',
    },
];

const ProjectPreview = () => (
    <div className="project-preview" aria-hidden="true">
        <div className="preview-window">
            <div className="preview-dots"><i /><i /><i /></div>
            <div className="preview-line" />
            <div className="preview-line short" />
            <div className="preview-blocks"><i /><i /><i /></div>
        </div>
    </div>
);

const Portfolio = () => (
    <section className="section" id="portfolio">
        <div className="section-wrap">
            <div className="section-heading">
                <span className="section-kicker">Selected projects</span>
                <h2>Thoughtful products, built for real people</h2>
                <p>Project highlights across web and mobile, alongside live websites from my portfolio.</p>
            </div>

            <div className="projects-grid">
                {projects.map(({ title, subtitle, description, icon: Icon, technologies }) => (
                    <article className="surface-card project-card" key={title}>
                        <ProjectPreview />
                        <div className="project-content">
                            <div className="project-title-row">
                                <div className="card-icon">{createElement(Icon, { size: 18, 'aria-hidden': true })}</div>
                                <div>
                                    <h3>{title}</h3>
                                    <p>{subtitle}</p>
                                </div>
                            </div>
                            <p>{description}</p>
                            <div className="project-tags">
                                {technologies.map((technology) => <span className="tech-badge" key={technology}>{technology}</span>)}
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="client-work">
                <h3><Globe2 size={17} className="inline-icon" aria-hidden="true" /> Live websites</h3>
                <div className="client-grid">
                    {liveWork.map(({ title, description, url }) => (
                        <article className="surface-card live-card" key={title}>
                            <h4>{title}</h4>
                            <p>{description}</p>
                            <a className="text-link" href={url} target="_blank" rel="noreferrer">
                                Visit website <ExternalLink size={13} aria-hidden="true" />
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Portfolio;
