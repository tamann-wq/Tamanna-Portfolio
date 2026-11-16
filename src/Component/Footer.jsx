import { ArrowUp, Github, Mail } from 'lucide-react';

const Footer = () => (
    <footer className="site-footer">
        <div className="footer-wrap footer-inner">
            <span className="footer-copy">© {new Date().getFullYear()} Tamanna Mishra. Built with care.</span>
            <div className="footer-links">
                <a href="https://github.com/tamann-wq" target="_blank" rel="noreferrer" aria-label="Tamanna Mishra on GitHub"><Github size={15} /></a>
                <a href="mailto:mishratamanna210@gmail.com" aria-label="Email Tamanna Mishra"><Mail size={15} /></a>
                <a className="back-to-top" href="#home">
                    Back to top <ArrowUp size={14} aria-hidden="true" />
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
