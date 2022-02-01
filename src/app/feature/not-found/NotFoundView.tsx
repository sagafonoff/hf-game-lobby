import { Link, useLocation } from "react-router-dom";

export function NotFoundView() {
  const location = useLocation();

  return (
    <div>
      <h3>404: Not Found</h3>
      <h4>
        <code>{location.pathname}</code>
      </h4>
      <Link to="/">Go to home</Link>
    </div>
  );
}
