import { createContext, useContext, useReducer, type ReactNode, type Dispatch } from 'react';

interface AuthState {
  user: string;
  token: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: 'no one',
  token: null,
  isLoggedIn: false,
};

const AuthContext = createContext<AuthState | null>(null);
const AuthActionContext = createContext<Dispatch<AuthActions> | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

type AuthActions =
  | {
      type: 'LOG_IN';
      user: AuthState['user'];
    }
  | { type: 'LOG_OUT' };

function authReducer(state: AuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case 'LOG_IN':
      return {
        token: 'ejyshjbjbj',
        user: action.user,
        isLoggedIn: true,
      };
    case 'LOG_OUT':
      return initialState;
    default:
      return state;
  }
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={state}>
      <AuthActionContext.Provider value={dispatch}>{children}</AuthActionContext.Provider>
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const auth = useContext(AuthContext);

  if (!auth) throw new Error('useAuth should only be used inside AuthContext');

  return auth;
}

export function useAuthActions() {
  const authActions = useContext(AuthActionContext);

  if (!authActions) throw new Error('useAuthActions should only be used inside AuthActionContext');

  return authActions;
}
