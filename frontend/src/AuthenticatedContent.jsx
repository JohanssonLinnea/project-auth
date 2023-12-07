import React, { useState, useEffect } from 'react';

const AuthenticatedContent = ({ accessToken }) => {
  const [secretContent, setSecretContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/secrets', {
          headers: {
            Authorization: accessToken,
          },
        });
        const data = await response.json();
        setSecretContent(data.secret);
      } catch (error) {
        console.error('Error fetching authenticated content:', error);
      }
    };

    fetchData();
  }, [accessToken]);

  return (
    <div>
      <h2>Authenticated Content</h2>
      <p>{secretContent}</p>
    </div>
  );
};

export default AuthenticatedContent;
