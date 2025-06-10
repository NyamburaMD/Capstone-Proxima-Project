// proxima-centuri/src/api/auth.js

const API_BASE_URL = 'http://localhost:5555/api'; // *** CRITICAL: Match your Flask backend URL! ***

export const login = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(data.user));
      return { success: true, user: data.user };
    } else {
      return { success: false, message: data.message || 'Login failed.' };
    }
  } catch (error) {
    console.error("Login API call failed:", error);
    return { success: false, message: 'Network error or server unreachable.' };
  }
};

export const signup = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, message: data.message || 'Account created successfully.' };
    } else {
      return { success: false, message: data.message || 'Signup failed.' };
    }
  } catch (error) {
    console.error("Signup API call failed:", error);
    return { success: false, message: 'Network error or server unreachable.' };
  }
};

export const logout = () => {
    localStorage.removeItem('user');
    fetch(`${API_BASE_URL}/logout`, { method: 'POST' });
};