import { getServerSession as serverSession } from 'next-auth';
import { authConfig } from './auth';

export async function getServerSession() {
  const session = await serverSession(authConfig);
  return session;
}
