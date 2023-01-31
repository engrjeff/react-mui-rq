import { useAuth, useAuthActions } from '../context/AuthContext';

function LogoutButton() {
  const auth = useAuth();
  const dispatch = useAuthActions();

  if (!auth.isLoggedIn) return null;

  const handleLogout = () => {
    dispatch({
      type: 'LOG_OUT',
    });
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default LogoutButton;
