import { Link } from 'react-router-dom';
import { PageHeader } from '../components/Shared.jsx';
import { usePageTitle } from '../hooks/hooks.js';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <>
      <PageHeader title="Page not found">That address does not lead anywhere in this journal.</PageHeader>
      <div className="wrap section tight"><Link to="/journal" className="btn btn-ink">Browse the journal</Link></div>
    </>
  );
}
