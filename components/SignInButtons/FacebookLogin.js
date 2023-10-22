import { signIn } from 'next-auth/react';

function FacebookLogin() {
  const handleFacebookLogin = () => {
    signIn('facebook');
  }

  return (
    <div>
      <button onClick={handleFacebookLogin}>Login with Facebook</button>
    </div>
  );
}

export default FacebookLogin;