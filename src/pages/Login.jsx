import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login, register, loginWithGoogle } = useContext(AuthContext);

  const [state, setState] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      if (state === 'Sign Up') {
        await register(name, email, password);
        setSuccess('Account created successfully! Please check your email to confirm your account.');
        // Clear form
        setName('');
        setEmail('');
        setPassword('');
        // Switch to login after 3 seconds
        setTimeout(() => {
          setState('Login');
          setSuccess('');
        }, 3000);
      } else {
        await login(email, password);
        setSuccess('Login successful! Welcome back.');
        // Navigate to home page after successful login
        setTimeout(() => {
          navigate('/');
        }, 1000);
      }
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);

    try {
      await loginWithGoogle();
      // Google will redirect, so no need for success message
    } catch (err) {
      setError(err.message || 'Google login failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center px-4">
      <div className="flex flex-col gap-3 m-auto items-center sm:items-start p-6 sm:p-8 w-full max-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-xl sm:text-2xl font-semibold text-center sm:text-left w-full">
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </p>
        <p className="text-center sm:text-left w-full">
          Please {state === 'Sign Up' ? "sign up" : "login"} to book appointments
        </p>

        {error && (
          <div className="w-full p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {success && (
          <div className="w-full p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            {success}
          </div>
        )}

        {/* Google Sign In Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full border border-gray-300 bg-white text-gray-700 py-2.5 px-4 rounded-md text-base font-medium hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-sm"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          {loading ? 'Connecting...' : 'Continue with Google'}
        </button>

        <div className="w-full flex items-center gap-3 my-2">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-xs text-gray-500">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              disabled={loading}
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            disabled={loading}
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            minLength={6}
            disabled={loading}
          />
          {state === 'Sign Up' && (
            <p className="text-xs text-gray-500 mt-1">Minimum 6 characters</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded-md text-base hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin">⏳</span>
              {state === 'Sign Up' ? 'Creating Account...' : 'Logging in...'}
            </span>
          ) : (
            state === 'Sign Up' ? "Create Account" : "Login"
          )}
        </button>

        {state === "Sign Up" ? (
          <p>
            Already have an account?
            <span
              onClick={() => {
                setState('Login');
                setError('');
                setSuccess('');
              }}
              className="text-primary underline cursor-pointer ml-1"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?
            <span
              onClick={() => {
                setState('Sign Up');
                setError('');
                setSuccess('');
              }}
              className="text-primary underline cursor-pointer ml-1"
            >
              Click here
            </span>
          </p>
        )}

        <div className="w-full pt-2 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            🔒 Secure authentication powered by Supabase
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
