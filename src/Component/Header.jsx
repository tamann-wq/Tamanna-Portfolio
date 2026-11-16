import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';

const resumeUrl = `${import.meta.env.BASE_URL}img/Tamanna_Mishra_Resume.pdf`;

const links = [
    { title: 'Home', to: '/' },
    { title: 'About', to: '/about' },
    { title: 'Skills', to: '/experience#skills' },
    { title: 'Experience', to: '/#experience' },
    { title: 'Projects', to: '/portfolio' },
    { title: 'Contact', to: '/contact' },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="nav-wrap">
                <Link className="brand" to="/" aria-label="Tamanna Mishra, home" onClick={() => setMenuOpen(false)}>
                    <span className="brand-mark" aria-hidden="true">TM</span>
                    <span>
                        <span className="brand-name">Tamanna Mishra</span>
                        <span className="brand-role">Frontend Developer</span>
                    </span>
                </Link>

                <nav className="nav-links" id="primary-navigation" aria-label="Main navigation" hidden={!menuOpen}>
                    {links.map(({ title, to }) => (
                        <Link className="nav-link" key={title} to={to} onClick={() => setMenuOpen(false)}>
                            {title}
                        </Link>
                    ))}
                </nav>

                <div className="nav-actions">
                    <a className="button button-primary header-resume" href={resumeUrl} download>
                        <Download size={15} aria-hidden="true" />
                        Download resume
                    </a>
                    <button
                        className="menu-toggle"
                        type="button"
                        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={menuOpen}
                        aria-controls="primary-navigation"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
