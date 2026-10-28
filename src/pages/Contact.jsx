import { useState } from 'react';
import { PageHeader } from '../components/Shared.jsx';
import { Check } from '../components/Icons.jsx';
import { site } from '../data/site.js';
import { usePageTitle } from '../hooks/hooks.js';

const empty = { name: '', email: '', message: '' };

export default function Contact() {
  usePageTitle('Contact', 'Say hello to Kindling. This contact form is a demonstration and sends nothing.');
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const found = {};
    if (!v.name.trim()) found.name = 'Please enter your name.';
    if (!v.email.trim()) found.email = 'Please enter your email address.';
    else if (!/^\S+@\S+\.\S+$/.test(v.email)) found.email = 'Please enter an email address like name@example.com.';
    if (v.message.trim().length < 10) found.message = 'Please write at least 10 characters.';
    setErrors(found);
    if (Object.keys(found).length) {
      document.querySelector('.contact-form [aria-invalid="true"]')?.focus();
      return;
    }
    setSent(true); // demonstration only: nothing is sent or stored
  };

  const a11y = (k) => ({ id: k, value: v[k], onChange: set(k), 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined });
  const field = (k, label, control) => (
    <div className="field">
      <label htmlFor={k}>{label}</label>
      {control}
      {errors[k] && <p className="error" id={`${k}-err`}>{errors[k]}</p>}
    </div>
  );

  return (
    <>
      <PageHeader title="Say hello" banner="contact-bg.jpg">Questions, story ideas or just a good trail recommendation? Write to me.</PageHeader>
      <section className="section tight">
        <div className="wrap split split-contact">
          <div className="prose">
            <h2>Write to the journal</h2>
            <p>I read every message and reply when I can. The address below is a placeholder, and the form on this page is a demonstration that does not send anything.</p>
            <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
          </div>
          {sent ? (
            <div className="sent" role="status">
              <Check />
              <h2>Thank you, {v.name.trim().split(' ')[0]}.</h2>
              <p>On a live website your message would now be on its way. This demonstration does not send or store anything.</p>
              <button className="btn btn-ghost" onClick={() => { setV(empty); setErrors({}); setSent(false); }}>Write another message</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit} noValidate>
              <div className="row2">
                {field('name', 'Name', <input type="text" autoComplete="name" {...a11y('name')} />)}
                {field('email', 'Email', <input type="email" autoComplete="email" {...a11y('email')} />)}
              </div>
              {field('message', 'Message', <textarea rows="7" {...a11y('message')} />)}
              <button type="submit" className="btn btn-ink">Send message</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
