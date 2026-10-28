const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
export const Search = () => <svg {...base}><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>;
export const Menu = () => <svg {...base}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
export const Close = () => <svg {...base}><path d="M6 6l12 12M18 6L6 18" /></svg>;
export const Arrow = () => <svg {...base}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
export const Prev = () => <svg {...base}><path d="M15 5l-7 7 7 7" /></svg>;
export const Next = () => <svg {...base}><path d="M9 5l7 7-7 7" /></svg>;
export const LinkIcon = () => <svg {...base}><path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3A4 4 0 0011 18.700l1-1" /></svg>;
export const Check = () => <svg {...base}><path d="M5 12.500l4.500 4.500L19 7.500" /></svg>;
export const Flame = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16 3c1.200 4.500 7 7.500 7 14.500A7 7 0 0 1 9 17.500c0-3 1.800-4.800 3-6.500.6 2.300 1.700 3.200 3 3.500.6-3.600-.6-7.500 1-11.500Z" fill="var(--ember)" />
    <path d="M16 18c.8 1.600 2.500 2.300 2.500 4.200a2.500 2.500 0 0 1-5 0c0-1.500 1.700-2.300 2.500-4.200Z" fill="var(--paper)" />
  </svg>
);
