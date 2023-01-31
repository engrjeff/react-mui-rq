import { useAuth } from '../context/AuthContext';

const AccountMenu = () => {
  const auth = useAuth();

  return <h1>{auth.user}</h1>;
};

export default AccountMenu;
