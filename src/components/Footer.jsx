import { Link } from 'react-router-dom';
import { nav, topics } from '../data/site.js';
import { Flame } from './Icons.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-brand"><Flame size={28} /> Kindling</p>
          <p className="footer-blurb">A journal of slow travel, cold-weather walks, home rituals and small joys.</p>
        </div>
        <nav aria-label="Footer">
          <h2>Explore</h2>
          {nav.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
        </nav>
        <nav aria-label="Topics">
          <h2>Topics</h2>
          {topics.map((t) => <Link key={t.name} to={`/journal?cat=${t.name}`}>{t.name}</Link>)}
        </nav>
      </div>
      <div className="wrap footer-base">
        <p>© {new Date().getFullYear()} Kindling. A fictional journal created for demonstration.</p>
        <p className="credit">Website designed and built by Zohair.</p>
        <Link to="/credits">Credits</Link>
      </div>
    </footer>
  );
}
