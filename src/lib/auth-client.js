import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL:
    process.env.BETTER_AUTH_URL ||
    "https://online-book-borrowing-platform-zeta.vercel.app",
 
});
export const { signIn, signUp, useSession } = createAuthClient();
