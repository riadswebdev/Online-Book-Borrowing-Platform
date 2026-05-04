import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "https://online-book-borrowing-platform-delta.vercel.app",
});
export const { signIn, signUp, signOut, useSession } = authClient;
