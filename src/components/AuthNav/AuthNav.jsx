import { Link } from 'components/Navigation/Navigation';

export function AuthNav() {
  return (
    <div>
      <Link to="/register">
        Register
      </Link>
      <Link to="/login">
        Log In
      </Link>
    </div>
  );
};