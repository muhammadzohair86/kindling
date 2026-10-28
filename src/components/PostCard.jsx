import { Link } from 'react-router-dom';
import { img } from '../data/images.js';
import { formatDate } from '../lib.js';

const Meta = ({ post }) => (
  <p className="meta">
    <Link to={`/journal?cat=${post.cat}`} className="cat">{post.cat}</Link>
    <span>{formatDate(post.date)}</span>
    <span>{post.read} min read</span>
  </p>
);

export function Card({ post }) {
  return (
    <article className="card">
      <Link to={`/journal/${post.slug}`} className="card-img" tabIndex={-1} aria-hidden="true">
        <img src={img(post.img)} alt="" style={{ objectPosition: post.pos }} loading="lazy" />
      </Link>
      <Meta post={post} />
      <h3><Link to={`/journal/${post.slug}`}>{post.title}</Link></h3>
      <p>{post.excerpt}</p>
    </article>
  );
}

export function Row({ post }) {
  return (
    <article className="row-card">
      <Link to={`/journal/${post.slug}`} className="row-img" tabIndex={-1} aria-hidden="true">
        <img src={img(post.img)} alt="" style={{ objectPosition: post.pos }} loading="lazy" />
      </Link>
      <div>
        <Meta post={post} />
        <h3><Link to={`/journal/${post.slug}`}>{post.title}</Link></h3>
        <p>{post.excerpt}</p>
      </div>
    </article>
  );
}
