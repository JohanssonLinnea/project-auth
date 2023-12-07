import React, { useState } from 'react';

const RegistrationForm = ({ handleRegistration }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });


  const handleRegistration = async (formData) => {
    try {
      const response = await fetch('your-api-endpoint-for-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Display the success message
        // Additional logic if needed
      } else {
        alert(data.error); // Display any error message from the server
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
