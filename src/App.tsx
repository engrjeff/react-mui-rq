import AccountMenu from './components/AccountMenu';
import AppButton from './components/AppButton';
import Login from './components/Login';
import LogoutButton from './components/LogoutButton';
import AuthProvider from './context/AuthContext';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

import AppThemeProvider from './theme/defaultTheme';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Posts from './components/Posts';
import SinglePost from './components/SinglePost';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    // <AuthProvider>
    //   <AccountMenu />
    //   <Login />
    //   <LogoutButton />
    //   <AppButton type='button' btnText='I am a button' />
    // </AuthProvider>

    <AppThemeProvider>
      <QueryClientProvider client={queryClient}>
        <h1>React Query</h1>
        <Box p={3}>
          {/* <SinglePost />
          <Posts /> */}
          <TodoForm />
          <TodoList />
        </Box>
        <ToastContainer />
      </QueryClientProvider>
    </AppThemeProvider>
  );
};

export default App;
