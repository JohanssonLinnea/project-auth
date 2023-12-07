import React from 'react';

const SignOutButton = ({ handleSignOut }) => {
  const handleClick = () => {
    handleSignOut();
  };

  return (
    <button onClick={handleClick}>Sign Out</button>
  );
};

export default SignOutButton;
