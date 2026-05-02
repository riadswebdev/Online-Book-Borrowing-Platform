import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "https://online-book-borrowing-platform-delta.vercel.app",
  // baseURL: "http://localhost:3000",
});
export const { signIn, signUp, signOut, useSession } = createAuthClient();
