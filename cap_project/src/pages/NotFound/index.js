import { NavLink } from 'react-router-dom';
import './style.scss';

function NotFound() {
  return (
    <section class="d-flex align-items-center justify-content-center vh-100">
      <div class="text-center">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3">
          {' '}
          <span class="text-danger">Opps!</span> Page not found.
        </p>
        <p class="lead">The page you’re looking for doesn’t exist.</p>
        <NavLink
          className="btn fw-bold border-0"
          to="/"
          style={{ backgroundColor: 'var(--primary)', color: 'var(--text)' }}
        >
          Go Home
        </NavLink>
      </div>
    </section>
  );
}
export default NotFound;
