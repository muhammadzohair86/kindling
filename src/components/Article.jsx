import { img } from '../data/images.js';
import { parseBlock } from '../lib.js';

export default function ArticleBody({ body }) {
  return (
    <div className="prose">
      {body.map(parseBlock).map((b, i) => {
        if (b.type === 'h2') return <h2 key={i}>{b.text}</h2>;
        if (b.type === 'quote') return <blockquote key={i}><p>{b.text}</p></blockquote>;
        if (b.type === 'list') return <ul key={i}>{b.items.map((it) => <li key={it}>{it}</li>)}</ul>;
        if (b.type === 'img') {
          return (
            <div key={i} className={`figs figs-${b.figs.length}`}>
              {b.figs.map((f) => <figure key={f.src}><img src={img(f.src)} alt={f.alt} loading="lazy" /></figure>)}
            </div>
          );
        }
        return <p key={i}>{b.text}</p>;
      })}
    </div>
  );
}
