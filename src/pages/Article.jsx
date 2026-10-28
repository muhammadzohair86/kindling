import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArticleBody from '../components/Article.jsx';
import { Card } from '../components/PostCard.jsx';
import Comments from '../components/Comments.jsx';
import { AuthorBox, Byline } from '../components/Shared.jsx';
import NotFound from './NotFound.jsx';
import { LinkIcon, Check, Prev, Next } from '../components/Icons.jsx';
import { img } from '../data/images.js';
import { posts, bySlug } from '../data/posts.js';
import { formatDate } from '../lib.js';
import { usePageTitle } from '../hooks/hooks.js';

export default function Article() {
  const { slug } = useParams();
  const post = bySlug(slug);
  const [copied, setCopied] = useState('');
  usePageTitle(post ? post.title : 'Story not found', post?.excerpt);
  if (!post) return <NotFound />;

  const i = posts.indexOf(post);
  const newer = posts[i - 1];
  const older = posts[i + 1];
  const related = posts
    .filter((p) => p !== post)
    .map((p) => ({ p, score: (p.cat === post.cat ? 2 : 0) + p.tags.filter((t) => post.tags.includes(t)).length }))
    .sort((a, b) => b.score - a.score || b.p.date.localeCompare(a.p.date))
    .slice(0, 3)
    .map((x) => x.p);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied('Link copied');
    } catch {
      setCopied('Copy failed. Please copy the address from your browser.');
    }
    setTimeout(() => setCopied(''), 2500);
  };

  return (
    <>
      <article className={`article ${post.format === 'note' ? 'is-note' : ''}`}>
        <header className="article-head wrap narrow">
          <p className="crumbs"><Link to="/journal">Journal</Link><Link to={`/journal?cat=${post.cat}`}>{post.cat}</Link></p>
          <h1>{post.title}</h1>
          <p className="lede">{post.excerpt}</p>
          <Byline date={formatDate(post.date)} read={post.read} />
        </header>

        {post.format === 'story' && (
          <figure className="article-hero wrap">
            <img src={img(post.img)} alt={post.alt} style={{ objectPosition: post.pos }} />
          </figure>
        )}

        <div className="wrap narrow article-body">
          {post.format === 'note' && (
            <figure className="note-fig"><img src={img(post.img)} alt={post.alt} /></figure>
          )}
          <ArticleBody body={post.body} />
          <div className="article-foot">
            <ul className="tag-list" aria-label="Tags">
              {post.tags.map((t) => <li key={t}><Link to={`/journal?tag=${encodeURIComponent(t)}`}>#{t}</Link></li>)}
            </ul>
            <div className="share">
              <button type="button" className="btn btn-ghost" onClick={copy}>{copied === 'Link copied' ? <Check /> : <LinkIcon />} Copy link</button>
              <span role="status" className="copied">{copied}</span>
            </div>
          </div>
          <AuthorBox />
          <nav className="pager" aria-label="More stories">
            {newer ? <Link to={`/journal/${newer.slug}`}><Prev /><span><small>Newer</small>{newer.title}</span></Link> : <span />}
            {older ? <Link to={`/journal/${older.slug}`}><span><small>Older</small>{older.title}</span><Next /></Link> : <span />}
          </nav>
          <Comments />
        </div>
      </article>

      <section className="section tint">
        <div className="wrap">
          <div className="section-head"><h2>Keep reading</h2><Link to="/journal" className="textlink">Back to the journal</Link></div>
          <div className="card-grid">{related.map((p) => <Card key={p.slug} post={p} />)}</div>
        </div>
      </section>
    </>
  );
}
