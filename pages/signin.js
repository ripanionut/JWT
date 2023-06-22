import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Signin = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { username, password });
      // Assuming the login endpoint returns a token upon successful login
      const { token } = response.data;

      // Store the token in localStorage or cookies
      localStorage.setItem('token', token);

      // Redirect to a protected route upon successful login
      router.push('/dashboard');
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center  justify-center bg-gray-900">
      <div className="max-w-md w-full p-6 space-y-8 bg-gray-800 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white">Sign In</h2>
        <form className="space-y-4" onSubmit={handleFormSubmit}>
          <div>
            <label className="block text-gray-300">Username</label>
            <input
              type="text"
              className="w-full  bg-gray-700 text-white border-gray-300 rounded-md focus:border-green-500 focus:ring-1 focus:ring-green-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-300">Password</label>
            <input
              type="password"
              className="w-full bg-gray-700 text-white border-gray-300 rounded-md focus:border-green-500 focus:ring-1 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full bg-green-500 text-white rounded-md py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
