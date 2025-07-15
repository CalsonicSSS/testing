import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

export default function Login() {
  console.log('Login component rendered');

  const { user, setUser } = useContext(AuthContext)!;

  return (
    <div>
      Login
      <p>User: {user ? JSON.stringify(user) : 'No user logged in'}</p>
      <button onClick={() => setUser({ name: 'John Doe', email: 'john.doe@example.com' })}>Log in</button>
    </div>
  );
}
