import { db } from '@/db';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { DefaultSession } from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import { getServerSession as serverSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}

const authConfig = {
  adapter: DrizzleAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

async function getServerSession() {
  const session = await serverSession(authConfig);
  return session;
}

export { authConfig, getServerSession };
