import { Link } from 'react-router-dom';
import { PageHeader } from '../components/Shared.jsx';
import Newsletter from '../components/Newsletter.jsx';
import { Arrow } from '../components/Icons.jsx';
import { img } from '../data/images.js';
import { author, topics } from '../data/site.js';
import { posts } from '../data/posts.js';
import { usePageTitle } from '../hooks/hooks.js';

export default function About() {
  usePageTitle('About', 'About Kindling, a fictional personal journal about travel, trails and small joys.');
  const count = (name) => posts.filter((p) => p.cat === name).length;
  return (
    <>
      <PageHeader title="About Kindling" banner="about-bg.jpg">A small journal about noticing things.</PageHeader>
      <section className="section tight">
        <div className="wrap split split-about">
          <figure className="portrait">
            <img src={img(author.portrait)} alt={`Portrait of ${author.name}`} />
            <figcaption>{author.name}, sample author</figcaption>
          </figure>
          <div className="prose">
            <h2>Hello, I’m {author.name}</h2>
            <p>Kindling began as a notebook for the good things I kept forgetting: the exact blue of a lake at seven in the morning, a trail snack that actually worked, the afternoon a stranger’s dog decided I was its person.</p>
            <p>It became a journal about slow travel, cold-weather walks, home rituals and the little sparks that make an ordinary week feel lit from within. The writing is practical when it can be, personal when it should be, and always meant to be read with a warm drink.</p>
            <p className="fine">Kindling is a fictional blog and {author.name} is a sample author, created to demonstrate a personal blog website. Photographs are sample imagery.</p>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <div className="section-head"><h2>What you will find here</h2></div>
          <ul className="topic-list">
            {topics.map((t) => (
              <li key={t.name}>
                <h3>{t.name}</h3>
                <p>{t.text}</p>
                <Link to={`/journal?cat=${t.name}`} className="textlink">{count(t.name)} {count(t.name) === 1 ? 'story' : 'stories'} <Arrow /></Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Newsletter id="news-about" />
    </>
  );
}
