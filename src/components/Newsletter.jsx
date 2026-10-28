import { useState } from 'react';
import { Check } from './Icons.jsx';

export default function Newsletter({ id = 'news' }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) return setError('Please enter your email address.');
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError('Please enter an email address like name@example.com.');
    setError('');
    setDone(true); // demonstration only: nothing is sent or stored
  };

  return (
    <section className="newsletter">
      <div className="wrap newsletter-inner">
        <div>
          <h2>Get new stories by email</h2>
          <p>One short letter when there is something worth sharing. No spam, and you can leave any time.</p>
        </div>
        {done ? (
          <p className="news-done" role="status"><Check /> Thank you! This is a demonstration, so nothing was sent or saved.</p>
        ) : (
          <form onSubmit={submit} noValidate>
            <label htmlFor={id}>Email address</label>
            <div className="news-row">
              <input id={id} type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined} placeholder="you@example.com" />
              <button type="submit" className="btn btn-ember">Subscribe</button>
            </div>
            {error && <p className="error" id={`${id}-err`}>{error}</p>}
            <p className="fine">Demonstration form: no subscription is created.</p>
          </form>
        )}
      </div>
    </section>
  );
}
