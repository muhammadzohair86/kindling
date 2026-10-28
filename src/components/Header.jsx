import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { nav } from '../data/site.js';
import { Menu, Close, Search, Flame } from './Icons.jsx';

function SearchForm({ id }) {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const submit = (e) => {
    e.preventDefault();
    const q = value.trim();
    navigate(q ? `/journal?q=${encodeURIComponent(q)}` : '/journal');
    setValue('');
  };
  return (
    <form className="search" role="search" onSubmit={submit}>
      <label htmlFor={id} className="sr-only">Search the journal</label>
      <input id={id} type="search" placeholder="Search the journal" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit" aria-label="Search"><Search /></button>
    </form>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="header">
      <div className="wrap header-row">
        <Link to="/" className="brand" aria-label="Kindling home"><Flame /> Kindling</Link>
        <div id="site-nav" className={`nav-wrap ${open ? 'open' : ''}`}>
          <nav className="nav" aria-label="Main">
            {nav.map((n) => <NavLink key={n.to} to={n.to} end={n.to === '/'}>{n.label}</NavLink>)}
          </nav>
          <SearchForm id={open ? 'search-mobile' : 'search-desktop'} />
        </div>
        <button className="menu-btn" aria-expanded={open} aria-controls="site-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <Close /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
