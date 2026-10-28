import { useState } from 'react';

const empty = { name: '', email: '', text: '' };

export default function Comments() {
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState({});
  const [list, setList] = useState([]);
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const found = {};
    if (!v.name.trim()) found.name = 'Please enter your name.';
    if (!v.email.trim()) found.email = 'Please enter your email address.';
    else if (!/^\S+@\S+\.\S+$/.test(v.email)) found.email = 'Please enter an email address like name@example.com.';
    if (v.text.trim().length < 5) found.text = 'Please write a few words.';
    setErrors(found);
    if (Object.keys(found).length) {
      document.querySelector('.comment-form [aria-invalid="true"]')?.focus();
      return;
    }
    setList([{ id: Date.now(), name: v.name.trim(), text: v.text.trim() }, ...list]);
    setV(empty);
  };

  const field = (k, label, control) => (
    <div className="field">
      <label htmlFor={`c-${k}`}>{label}</label>
      {control}
      {errors[k] && <p className="error" id={`c-${k}-err`}>{errors[k]}</p>}
    </div>
  );
  const a11y = (k) => ({ id: `c-${k}`, value: v[k], onChange: set(k), 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `c-${k}-err` : undefined });

  return (
    <section className="comments" aria-labelledby="comments-title">
      <h2 id="comments-title">Comments</h2>
      <p className="fine">This is a demonstration. Comments are kept only on this page and disappear when you leave or refresh it.</p>
      {list.length === 0 ? (
        <p className="empty-note">No comments yet. Be the first to say hello.</p>
      ) : (
        <ol className="comment-list" aria-live="polite">
          {list.map((c) => (
            <li key={c.id}>
              <strong>{c.name}</strong> <span className="preview-tag">Preview, not saved</span>
              <p>{c.text}</p>
            </li>
          ))}
        </ol>
      )}
      <form className="comment-form" onSubmit={submit} noValidate>
        <h3>Leave a comment</h3>
        <div className="row2">
          {field('name', 'Name', <input type="text" autoComplete="name" {...a11y('name')} />)}
          {field('email', 'Email (not shown)', <input type="email" autoComplete="email" {...a11y('email')} />)}
        </div>
        {field('text', 'Comment', <textarea rows="5" {...a11y('text')} />)}
        <button type="submit" className="btn btn-ink">Post comment</button>
      </form>
    </section>
  );
}
