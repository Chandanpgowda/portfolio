import { useState, type FormEvent } from 'react';
import { profile } from '../data/content';
import { Reveal, SectionHead } from './Reveal';
import { MailIcon, PhoneIcon, LinkedInIcon, GitHubIcon, SendIcon } from './Icons';

export function Contact() {
  const [status, setStatus] = useState('');

  // Static-host friendly: opens the visitor's email client via mailto (no backend, no secrets).
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const message = String(data.get('message') || '');
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client — I'll get back to you soon!");
  };

  const items = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon },
    { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, Icon: PhoneIcon },
    { label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin, Icon: LinkedInIcon },
    { label: 'GitHub', value: '@Chandanpgowda', href: profile.github, Icon: GitHubIcon },
  ];

  return (
    <section id="contact" aria-label="Contact">
      <div className="container">
        <SectionHead
          kicker="Contact"
          title="Let's Build Something Together."
          sub="Have an opportunity, project, or just want to talk tech? My inbox is open."
        />
        <div className="contact-grid">
          <div className="contact-info">
            {items.map(({ label, value, href, Icon }, i) => (
              <Reveal key={label} delay={i * 0.07}>
                <a className="card contact-item" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  <span className="c-icon">
                    <Icon width={19} height={19} />
                  </span>
                  <span>
                    <span className="c-label">{label}</span>
                    <span className="c-value" style={{ display: 'block' }}>{value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <form className="card contact-form" onSubmit={onSubmit}>
              <div className="form-row">
                <label>
                  Name
                  <input name="name" required autoComplete="name" placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
                </label>
              </div>
              <label>
                Message
                <textarea name="message" required placeholder="Tell me about your project or opportunity…" />
              </label>
              <button type="submit" className="btn btn-primary" style={{ justifySelf: 'start' }}>
                <SendIcon width={16} height={16} /> Send Message
              </button>
              {status && <p className="form-status" role="status">{status}</p>}
              <p className="form-note">
                This form opens your email client — a backend-free, privacy-friendly approach for static hosting.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
