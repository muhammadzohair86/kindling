import { Link } from 'react-router-dom';
import { img } from '../data/images.js';
import { author } from '../data/site.js';
import { Arrow } from './Icons.jsx';

export const PageHeader = ({ title, children, banner }) => (
  <section className="page-header">
    <div className="wrap">
      <h1>{title}</h1>
      {children && <p className="lede">{children}</p>}
      {banner && <img className="banner" src={img(banner)} alt="" />}
    </div>
  </section>
);

export const Byline = ({ date, read }) => (
  <div className="byline">
    <img src={img(author.avatar)} alt="" />
    <p><strong>{author.name}</strong><span>{date} · {read} min read</span></p>
  </div>
);

export const AuthorBox = () => (
  <aside className="author-box" aria-label="About the author">
    <img src={img(author.portrait)} alt={`Portrait of ${author.name}`} loading="lazy" />
    <div>
      <p className="label">Written by</p>
      <h2>{author.name}</h2>
      <p>{author.bio}</p>
      <Link to="/about" className="textlink">About the journal <Arrow /></Link>
    </div>
  </aside>
);
