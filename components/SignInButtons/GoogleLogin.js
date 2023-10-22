import { signIn } from 'next-auth/react';

export default function GoogleLoginButton() {
  const handleGoogleLogin = () => {
    signIn('google');
  };

  return (
    <button onClick={handleGoogleLogin}>Login with Google</button>
  );
}
