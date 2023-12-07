import React, { useState, useEffect } from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import AuthenticatedContent from './AuthenticatedContent';
import SignOutButton from './SignOutButton';

const App = () => {
  const [accessToken, setAccessToken] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleRegistration = async (formData) => {
    try {
      const response = await fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.accessToken) {
        setAccessToken(data.accessToken);
        setLoggedIn(true);
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleLogin = async (formData) => {
    try {
      const response = await fetch('/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.accessToken) {
        setAccessToken(data.accessToken);
        setLoggedIn(true);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleSignOut = () => {
    setAccessToken('');
    setLoggedIn(false);
  };

  return (
    <div>
      {!loggedIn ? (
        <>
          <RegistrationForm handleRegistration={handleRegistration} />
          <LoginForm handleLogin={handleLogin} />
        </>
      ) : (
        <>
          <AuthenticatedContent accessToken={accessToken} />
          <SignOutButton handleSignOut={handleSignOut} />
        </>
      )}
    </div>
  );
};

export default App;
