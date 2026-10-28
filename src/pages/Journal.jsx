import { useSearchParams } from 'react-router-dom';
import Chips from '../components/Chips.jsx';
import { Row } from '../components/PostCard.jsx';
import Pagination from '../components/Pagination.jsx';
import { PageHeader } from '../components/Shared.jsx';
import Newsletter from '../components/Newsletter.jsx';
import { Search, Close } from '../components/Icons.jsx';
import { posts, categories } from '../data/posts.js';
import { usePageTitle } from '../hooks/hooks.js';

const PER_PAGE = 5;

export default function Journal() {
  usePageTitle('Journal', 'Browse every story in the Kindling journal by topic, tag or search term.');
  const [params, setParams] = useSearchParams();
  const q = params.get('q') || '';
  const cat = categories.includes(params.get('cat')) ? params.get('cat') : 'All';
  const tag = params.get('tag') || '';
  const page = Math.max(1, Number(params.get('page')) || 1);

  const update = (changes, keepPage = false) => {
    const next = { q, cat, tag, page, ...changes };
    if (!keepPage && !('page' in changes)) next.page = 1;
    const sp = new URLSearchParams();
    if (next.q) sp.set('q', next.q);
    if (next.cat && next.cat !== 'All') sp.set('cat', next.cat);
    if (next.tag) sp.set('tag', next.tag);
    if (next.page > 1) sp.set('page', String(next.page));
    setParams(sp, { replace: true });
  };

  const term = q.trim().toLowerCase();
  const list = posts.filter((p) =>
    (cat === 'All' || p.cat === cat) &&
    (!tag || p.tags.includes(tag)) &&
    (!term || [p.title, p.excerpt, p.cat, ...p.tags].join(' ').toLowerCase().includes(term))
  );
  const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
  const current = Math.min(page, pages);
  const visible = list.slice((current - 1) * PER_PAGE, current * PER_PAGE);
  const filtered = q || tag || cat !== 'All';

  return (
    <>
      <PageHeader title="The journal" banner="blog-bg.jpg">Every story, note and field report. Search, pick a topic or follow a tag.</PageHeader>
      <section className="section tight">
        <div className="wrap narrow-wide">
          <form className="search search-lg" role="search" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="journal-search" className="sr-only">Search stories</label>
            <input id="journal-search" type="search" placeholder="Search stories, topics and tags" value={q} onChange={(e) => update({ q: e.target.value })} />
            <span aria-hidden="true"><Search /></span>
          </form>
          <Chips options={categories} value={cat} onChange={(c) => update({ cat: c })} label="Filter by topic" />
          {tag && (
            <p className="active-tag">Tagged <strong>#{tag}</strong>
              <button type="button" onClick={() => update({ tag: '' })} aria-label={`Remove tag ${tag}`}><Close /></button>
            </p>
          )}
          <p className="count" role="status">
            {list.length === 0 ? 'No stories found' : `Showing ${visible.length} of ${list.length} ${list.length === 1 ? 'story' : 'stories'}`}
          </p>
          {list.length === 0 ? (
            <div className="empty">
              <h2>Nothing matches that search</h2>
              <p>Try a different word, choose another topic, or start again from the full journal.</p>
              <button className="btn btn-ink" onClick={() => setParams({}, { replace: true })}>Clear all filters</button>
            </div>
          ) : (
            <>
              <div className="rows">{visible.map((p) => <Row key={p.slug} post={p} />)}</div>
              <Pagination page={current} pages={pages} onChange={(n) => update({ page: n }, true)} />
            </>
          )}
          {filtered && list.length > 0 && <p className="fine"><button className="linkish" onClick={() => setParams({}, { replace: true })}>Clear filters</button></p>}
        </div>
      </section>
      <Newsletter id="news-journal" />
    </>
  );
}
