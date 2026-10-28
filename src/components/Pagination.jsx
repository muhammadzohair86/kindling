import { Prev, Next } from './Icons.jsx';

export default function Pagination({ page, pages, onChange }) {
  if (pages <= 1) return null;
  return (
    <nav className="pagination" aria-label="Pagination">
      <button className="page-btn" onClick={() => onChange(page - 1)} disabled={page === 1} aria-label="Previous page"><Prev /></button>
      {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
        <button key={n} className="page-btn" onClick={() => onChange(n)} aria-current={n === page ? 'page' : undefined} aria-label={`Page ${n}`}>{n}</button>
      ))}
      <button className="page-btn" onClick={() => onChange(page + 1)} disabled={page === pages} aria-label="Next page"><Next /></button>
    </nav>
  );
}
