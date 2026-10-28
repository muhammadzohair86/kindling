export const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

// Block syntax used by post bodies: "## " heading, "> " quote, "- a|b|c" list,
// "img:file|alt|file|alt" figure(s), anything else a paragraph.
export const parseBlock = (s) => {
  if (s.startsWith('## ')) return { type: 'h2', text: s.slice(3) };
  if (s.startsWith('> ')) return { type: 'quote', text: s.slice(2) };
  if (s.startsWith('- ')) return { type: 'list', items: s.slice(2).split('|') };
  if (s.startsWith('img:')) {
    const parts = s.slice(4).split('|');
    const figs = [];
    for (let i = 0; i < parts.length; i += 2) figs.push({ src: parts[i], alt: parts[i + 1] });
    return { type: 'img', figs };
  }
  return { type: 'p', text: s };
};

export const readingTime = (body) => {
  const words = body.join(' ').split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
};
