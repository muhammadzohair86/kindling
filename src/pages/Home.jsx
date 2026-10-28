import { Link } from 'react-router-dom';
import { Card, Row } from '../components/PostCard.jsx';
import { AuthorBox } from '../components/Shared.jsx';
import Newsletter from '../components/Newsletter.jsx';
import { Arrow } from '../components/Icons.jsx';
import { img } from '../data/images.js';
import { posts } from '../data/posts.js';
import { topics, scrapbook } from '../data/site.js';
import { formatDate } from '../lib.js';
import { usePageTitle } from '../hooks/hooks.js';

export default function Home() {
  usePageTitle('', 'Kindling is a journal of slow travel, trails, home rituals and small joys. A fictional demo blog.');
  const featured = posts.find((p) => p.featured);
  const stories = posts.filter((p) => !p.featured && p.format === 'story').slice(0, 3);
  const more = posts.filter((p) => !p.featured && !stories.includes(p)).slice(0, 4);
  const count = (name) => posts.filter((p) => p.cat === name).length;

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-top">
            <h1>Stories from the <em>trail</em>, the table and everywhere in between.</h1>
            <p className="lede">Kindling is a journal of slow travel, cold-weather walks, home rituals and the small things that light up an ordinary week.</p>
          </div>
          <article className="feature">
            <Link to={`/journal/${featured.slug}`} className="feature-img" tabIndex={-1} aria-hidden="true">
              <img src={img(featured.img)} alt="" style={{ objectPosition: featured.pos }} />
            </Link>
            <div className="feature-card">
              <p className="meta"><span className="cat">Featured story</span><span>{formatDate(featured.date)}</span></p>
              <h2><Link to={`/journal/${featured.slug}`}>{featured.title}</Link></h2>
              <p>{featured.excerpt}</p>
              <Link to={`/journal/${featured.slug}`} className="btn btn-ink">Read the story <Arrow /></Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Latest stories</h2>
            <Link to="/journal" className="textlink">All stories <Arrow /></Link>
          </div>
          <div className="card-grid">{stories.map((p) => <Card key={p.slug} post={p} />)}</div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <div className="section-head"><h2>Browse by topic</h2></div>
          <ul className="topic-grid">
            {topics.map((t) => (
              <li key={t.name}>
                <Link to={`/journal?cat=${t.name}`} className="topic">
                  <img src={img(t.img)} alt="" style={{ objectPosition: t.pos }} loading="lazy" />
                  <span className="topic-text">
                    <strong>{t.name}</strong>
                    <small>{count(t.name)} {count(t.name) === 1 ? 'story' : 'stories'}</small>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <div className="section-head"><h2>More from the journal</h2></div>
            <div className="rows">{more.map((p) => <Row key={p.slug} post={p} />)}</div>
            <Link to="/journal" className="btn btn-ghost">Browse the whole journal</Link>
          </div>
          <AuthorBox />
        </div>
      </section>

      <Newsletter id="news-home" />

      <section className="scrapbook" aria-label="Scrapbook of photographs">
        <ul>
          {scrapbook.map(([src, alt]) => <li key={src}><img src={img(src)} alt={alt} loading="lazy" /></li>)}
        </ul>
      </section>
    </>
  );
}
