import React, {useState} from "react";
import "../../App.css";

const Login = () => {

  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = credentials;

    if (!email || !password) {
      setError('All fields are required.');
      return;
    }

    try {
      // Fake auth simulation
      if (email === 'user@example.com' && password === 'password123') {
        alert('Login successful 🚀');
        // Redirect to dashboard or store user info in context
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError(err.message);
    }
  };

    return (
        <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login to Proxima Centauri</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />

        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}

        <button className="button" type="submit">
          Log In
        </button>
      </form>
    </div>
    );
};
export default Login;