import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login, register } = useContext(AuthContext);

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

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center px-4">
      <div className="flex flex-col gap-3 m-auto items-center sm:items-start p-6 sm:p-8 w-full max-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg animate-fadeIn">
        <p className="text-xl sm:text-2xl font-semibold text-center sm:text-left w-full">
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </p>
        <p className="text-center sm:text-left w-full">
          Please {state === 'Sign Up' ? "sign up" : "login"} to book appointments
        </p>

        {error && (
          <div className="w-full p-3 bg-red-100 border border-red-400 text-red-700 rounded animate-fadeIn">
            {error}
          </div>
        )}

        {success && (
          <div className="w-full p-3 bg-green-100 border border-green-400 text-green-700 rounded animate-fadeIn">
            {success}
          </div>
        )}

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
