type Profile = {
  name: string;
  email: string;
};

export type User = {
  isAuthenticated: boolean;
  idToken: string;
  accessToken: string;
  tokenType: string;
  scope: string | string[] | null;
  expiresAt: Date;
  profile: Profile;
};
