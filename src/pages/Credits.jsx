import { PageHeader } from '../components/Shared.jsx';
import { usePageTitle } from '../hooks/hooks.js';

export default function Credits() {
  usePageTitle('Credits');
  return (
    <>
      <PageHeader title="Credits">Third-party material used on this website.</PageHeader>
      <section className="section tight">
        <div className="wrap narrow">
          <ul className="credits-list">
            <li>
              <strong>Photography</strong>
              Sample photography from the Blanca template by{' '}
              <a href="https://colorlib.com/" target="_blank" rel="noopener noreferrer">Colorlib</a>, used under the{' '}
              <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution 3.0</a> licence.
            </li>
            <li>
              <strong>Typefaces</strong>
              Instrument Serif, Literata and Hanken Grotesk, used under the SIL Open Font License 1.1.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
