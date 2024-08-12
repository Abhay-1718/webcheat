// import { useAuthState } from 'react-firebase-hooks/auth';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom';
import { auth } from './firebase';

const AuthRoute = ({ element }) => {
  const [user] = useAuthState(auth);

  // If user is authenticated, redirect to /webfront
  if (user) {
    return <Navigate to="/webfront" />;
  }

  // If user is not authenticated, render the element (e.g., Auth component)
  return element;
};

export default AuthRoute;





// Purpose: To handle redirection based on authentication status.
// Functionality:
// If the user is authenticated, it redirects them to /webfront (which is your main website view).
// If the user is not authenticated, it displays the authentication component (Auth).