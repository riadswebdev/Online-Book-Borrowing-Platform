import { createAuthClient } from "better-auth/react";

const getAuthBaseURL = () => {
  if (typeof window !== "undefined") {
    return `${window.location.origin}/api/auth`;
  }

  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return `${process.env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, "")}/api/auth`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}/api/auth`;
  }

  return "http://localhost:3000/api/auth";
};

export const authClient = createAuthClient({
  baseURL: getAuthBaseURL(),
});
export const { signIn, signUp, signOut, useSession } = authClient;
