


import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const isFormValid = Object.values(formData).every(field => field.trim() !== '');

  const handleChange = (e) => {
    const { name, value } = e.input;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    alert('Message sent!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Us</h2>

      <label>
        First Name<span style={{ color: 'red' }}>*</span>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Last Name<span style={{ color: 'red' }}>*</span>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email<span style={{ color: 'red' }}>*</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Message<span style={{ color: 'red' }}>*</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit" disabled={!isFormValid}>
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
