import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    type: string;
    accessToken: string;
  }

  interface Session {
    user: User & DefaultSession["user"];
    accessToken: string;
  }
}
