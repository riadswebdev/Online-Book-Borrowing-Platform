import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.BETTER_AUTH_URI);
const db = client.db("Online-books-borrow-platform");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: [
    "http://localhost:3000",
    "https://online-book-borrowing-platform-zeta.vercel.app",
  ],
  socialProviders: {
    google: {
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    },
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
