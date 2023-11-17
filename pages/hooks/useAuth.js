import { useSession, signOut } from 'next-auth/react';

export function useAuth() {
  const { data: session, status } = useSession();

  const isAuthenticated = status === 'authenticated';

  const handleSignOut = async () => {
    await signOut();
  };

  return {
    session: session,
    isAuthenticated,
    signOut: handleSignOut,
  };
}
