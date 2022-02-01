import { Container } from "@hellofresh/scm-design-system";
import { Outlet } from "react-router-dom";
import { AuthStatus } from "../core/auth/AuthStatus";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

type LayoutProps = {
  children?: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />

      <Container
        maxWidth="lg"
        style={{
          paddingTop: "56px",
          paddingBottom: "24px",
        }}
      >
        <main>
          <AuthStatus />
          {children}

          <Outlet />
        </main>
      </Container>

      <Footer />
    </>
  );
}
