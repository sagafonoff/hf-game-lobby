import { FC } from "react";
import { Route } from "react-router-dom";
import { NotFoundView } from "../../feature/not-found/NotFoundView";

const authenticatedPages = {
  "/settings": "SettingsView",
};

type RouterProps = {
  isLoadingUser: boolean;
  isAuthenticated: boolean;
  authCallbackPath: string;
};

export const Router: FC<RouterProps> = (props) => {
  if (props.isLoadingUser) return null;

  return (
    <Route>
      <Route
        path="/"
        children={
          props.isAuthenticated ? (
            <p>HomeView here</p>
          ) : (
            <p>KatanaSplash here</p>
          )
        }
      />
      <Route path={props.authCallbackPath}>
        <p>Auth Callback here</p>
      </Route>
      {Object.entries(authenticatedPages).map(([path, component]) => (
        <p>Protected route here</p>
        // <ProtectedRoute
        //   key={path}
        //   path={path}
        //   component={component}
        //   authenticated={props.isAuthenticated}
        // />
      ))}
      <Route path="*">
        <NotFoundView />
      </Route>
    </Route>
  );
};

export const Routes = Router;
