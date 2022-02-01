import { useAuth } from "@app/core/auth/AuthStatus";
import ENV from "@config/env.json";
import { Box, Button } from "@hellofresh/scm-design-system";
import hfLogoUrl from "assets/hf-logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function SignInView() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: unkown object type
  const from = location.state?.from?.pathname || "/";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;

    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  }

  return (
    <section
      style={{
        display: "grid",
        placeContent: "center",
        justifyContent: "center",
      }}
    >
      <Box style={{ backgroundColor: "white", padding: "64px 85px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={hfLogoUrl} alt="HelloFresh Logo" />
          <h1 style={{ marginBottom: 0 }}>
            Welcome to React Template ({ENV.TARGET})
          </h1>
          <p style={{ marginTop: 0, color: "gray" }}>
            Sign in with your Microsoft Azure account
          </p>

          <Button
            fullWidth
            color="primary"
            label="Sign In with Azure"
            variant="primary"
          >
            <Link to="/signin" />
          </Button>

          <br />
          <p style={{ textAlign: "center", color: "gray" }}>
            Trouble signing in?
            <br />
            Please{" "}
            <a
              href="https://hellofresh.atlassian.net/servicedesk/customer/portal/18"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact IT Helpdesk
            </a>{" "}
            for assistance
          </p>
        </div>
      </Box>
      <p>You must log in to view the page at {from}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <button type="submit">Sign In</button>
      </form>
    </section>
  );
}
