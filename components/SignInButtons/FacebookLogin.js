import { signIn } from 'next-auth/react';

function FacebookLogin() {
  const handleFacebookLogin = () => {
    signIn('facebook');
  }

  return (
    <div>
      <h1>Login to Your App</h1>
      <button onClick={handleFacebookLogin}>Login with Facebook</button>
    </div>
  );
}

export default FacebookLogin;