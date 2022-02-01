import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./core/auth/RequireAuth";
import { HomeView } from "./feature/home/HomeView";
import { SignInView } from "./feature/sign-in/SignInView";
import { Layout } from "./layout/Layout";

export default function App() {
  return (
    <>
      <br />
      <br />
      <br />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/signin" element={<SignInView />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

function ProtectedPage() {
  return <HomeView />;
}
