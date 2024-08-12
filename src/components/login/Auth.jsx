import { useState } from "react";
import { auth, googleProvider } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Registration successful!");
        navigate('/WebFront');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Login successful!");
        navigate('/WebFront');
      }
    } catch (error) {
      let errorMessage = "An error occurred. Please try again.";

      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = "Email already in use";
          break;
        case 'auth/invalid-email':
          errorMessage = "Invalid email address";
          break;
        case 'auth/weak-password':
          errorMessage = "Password should be at least 6 characters";
          break;
        case 'auth/wrong-password':
          errorMessage = "Incorrect password";
          break;
        case 'auth/user-not-found':
          errorMessage = "No user found with this email";
          break;
        case 'auth/invalid-credential':
          errorMessage = "Invalid credentials provided";
          break;
        default:
          errorMessage = error.message || "An error occurred. Please try again.";
          break;
      }

      toast.error(errorMessage);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Logged in with Google successfully!");
      navigate('/WebFront');
    } catch (error) {
      toast.error("Error signing in with Google: " + (error.message || "An error occurred"));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAuth();
    }
  };

  const toggleRegistering = () => setIsRegistering(!isRegistering);

  return (
    <main className="flex items-center justify-center h-screen bg-gray-100 p-4 dark:bg-gray-900">
      <ToastContainer />
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white text-gray-900 shadow-md dark:bg-gray-800 dark:text-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">{isRegistering ? "Sign up" : "Sign in"}</h1>
          <p className="text-sm dark:text-gray-400">
            {isRegistering ? "Create an account to get started" : "Sign in to access your account"}
          </p>
        </div>
        <form noValidate className="space-y-6" onKeyDown={handleKeyPress}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="user@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    // Handle forgot password functionality here
                  }}
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
              />
            </div>
          </div>
          <div className="space-y-4">
            <button
              type="button"
              onClick={handleAuth}
              className="w-full h-12 px-4 font-semibold rounded-md bg-indigo-600 text-white dark:bg-indigo-500 dark:text-gray-100 hover:bg-indigo-700 dark:hover:bg-indigo-400"
            >
              {isRegistering ? "Sign up" : "Sign in"}
            </button>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-x-3 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_17_40)">
                  <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                  <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                  <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                  <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                </g>
                <defs>
                  <clipPath id="clip0_17_40">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Continue with Google
            </button>
            <p className="text-sm text-center dark:text-gray-400">
              {isRegistering ? "Already have an account?" : "Don't have an account yet?"} 
              <a
                href="#"
                onClick={toggleRegistering}
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                {isRegistering ? "Sign in" : "Sign up"}
              </a>.
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Auth;
