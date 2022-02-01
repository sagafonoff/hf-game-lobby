import { User } from "@domain/auth/user";
import { useState } from "react";
import { fakeAuthProvider } from "./auth";
import { AuthContext } from "./AuthStatus";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | string | null>(null);

  const signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
