import React, { useState } from 'react';
import './App.css';

function Form() {
  // holding all the task
  const [formData, setFormData] = useState({ name: '', email: '' });

  // hook for getting all the data input
  const [submitted, setSubmitted] = useState([]);

  // function for getting the data
  const fillForm = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail(formData.email)) {
      alert(`Form Data:\nName: ${formData.name}\nEmail: ${formData.email}`);
      setSubmitted((prevSubmitted) => [...prevSubmitted, formData]);
      setFormData({ name: '', email: '' }); // reset the form fields
      e.target.reset();
    } else {
      alert('Invalid email address!');
    }
  };

  const isValidEmail = (email) => {
    // Email input validation to contain at least one @ and one .
    const emailError = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailError.test(email);
  };

  return (
    <div>
      <h1 className='reg'>REGISTRATION FORM</h1>
      <form onSubmit={handleSubmit}>
        {/* Name input field */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter Your name"
            id="name"
            name="name"
            value={formData.name}
            onChange={fillForm}
          />
        </div>
        {/* Email input field */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            id="email"
            name="email"
            value={formData.email}
            onChange={fillForm}
          />
        </div>
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>

      {/* Show input field data in a table */}
      <div>
        <h2>Registered Data:</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {submitted.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Displaying the form data in real-time*/}
      {/* Display value only when there is input */}
      {Object.values(formData).some((value) => value) && (
      <div>
        <h2>Input Data (Real-Time):</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{formData.name}</td>
              <td>{formData.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
      )};

    </div>
  );
};

export default Form;
