import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient, type UserRole } from "@prisma/client";
import { compare } from 'bcryptjs';

import { env } from "~/env.mjs";
import { db } from "~/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
      // ...other properties
      role: UserRole;
    };
  }

  interface User {
    // ...other properties
    role: UserRole;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        role: user.role,
      },
    }),
  },
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      authorize: authorize(db),
      // async authorize(credentials, req) {
      //   // Add logic here to look up the user from the credentials supplied
      //   const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

      //   if (user) {
      //     // Any object returned will be saved in `user` property of the JWT
      //     return user;
      //   } else {
      //     // If you return null then an error will be displayed advising the user to check their details.
      //     return null;

      //     // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      //   }
      // },
    }),
    // DiscordProvider({
    //   clientId: env.DISCORD_CLIENT_ID,
    //   clientSecret: env.DISCORD_CLIENT_SECRET,
    // }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

function authorize(prisma: PrismaClient) {
    return async (credentials?: Record<'email' | 'password', string>) => {
      if (!credentials) throw new Error('Missing credentials');
      if (!credentials.email) throw new Error('"email" is required in credentials');
      if (!credentials.password) throw new Error('"password" is required in credentials');
      const maybeUser = await prisma.user.findFirst({
        where: { email: credentials.email },
        select: { id: true, email: true, password: true, role: true },
      });
      if (!maybeUser?.password) return null;
      // verify the input password with stored hash
      const isValid = await compare(credentials.password, maybeUser.password);
      if (!isValid) return null;
      return { id: maybeUser.id, email: maybeUser.email, role: maybeUser.role };
    };
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
