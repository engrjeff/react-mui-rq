import { useAuth, useAuthActions } from '../context/AuthContext';

function Login() {
  const auth = useAuth();

  const dispatch = useAuthActions();

  const handleLogin = () => {
    dispatch({
      type: 'LOG_IN',
      user: 'Jezrell',
    });
  };

  if (auth.isLoggedIn) return null;

  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default Login;
