import { useState } from 'react';
import { ArrowUpRight, Github, Mail, MapPin, Send } from 'lucide-react';

const initialForm = { name: '', email: '', phone: '', message: '' };

const Contact = () => {
    const [formData, setFormData] = useState(initialForm);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const message = [
            `Name: ${formData.name}`,
            `Email: ${formData.email}`,
            formData.phone ? `Phone: ${formData.phone}` : '',
            `Message: ${formData.message}`,
        ].filter(Boolean).join('\n');

        window.open(`https://wa.me/919244856954?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
        setFormData(initialForm);
    };

    return (
        <section className="section section-muted" id="contact">
            <div className="section-wrap">
                <div className="section-heading">
                    <span className="section-kicker">Get in touch</span>
                    <h2>Let’s make something meaningful</h2>
                    <p>I’m available to join immediately and open to frontend opportunities in Bengaluru and beyond.</p>
                </div>

                <div className="contact-grid">
                    <article className="surface-card contact-card">
                        <h3>Contact details</h3>
                        <p className="form-note">The best way to reach me is by email. I’d be glad to talk about a role, a project, or frontend engineering.</p>
                        <div className="contact-methods">
                            <a className="contact-method" href="mailto:mishratamanna210@gmail.com">
                                <div className="card-icon"><Mail size={17} aria-hidden="true" /></div>
                                <div><span>Email</span>mishratamanna210@gmail.com</div>
                            </a>
                            <div className="contact-method">
                                <div className="card-icon"><MapPin size={17} aria-hidden="true" /></div>
                                <div><span>Location</span>Bengaluru, India</div>
                            </div>
                            <a className="contact-method" href="https://github.com/tamann-wq" target="_blank" rel="noreferrer">
                                <div className="card-icon"><Github size={17} aria-hidden="true" /></div>
                                <div><span>GitHub</span>github.com/tamann-wq <ArrowUpRight size={12} /></div>
                            </a>
                        </div>
                    </article>

                    <article className="surface-card contact-card">
                        <h3>Send a message</h3>
                        <p className="form-note">Submitting opens WhatsApp with your message ready to send.</p>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="field">
                                <label htmlFor="contact-name">Your name</label>
                                <input id="contact-name" name="name" value={formData.name} onChange={handleChange} autoComplete="name" placeholder="How should I address you?" required maxLength={100} />
                            </div>
                            <div className="field">
                                <label htmlFor="contact-email">Email address</label>
                                <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" placeholder="you@company.com" required maxLength={254} />
                            </div>
                            <div className="field">
                                <label htmlFor="contact-phone">Phone number <span>(optional)</span></label>
                                <input id="contact-phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} autoComplete="tel" placeholder="Your phone number" maxLength={30} />
                            </div>
                            <div className="field">
                                <label htmlFor="contact-message">Message</label>
                                <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me a little about what you have in mind..." required minLength={10} maxLength={2000} />
                            </div>
                            <button className="button button-primary" type="submit">
                                Send via WhatsApp <Send size={15} aria-hidden="true" />
                            </button>
                        </form>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Contact;
