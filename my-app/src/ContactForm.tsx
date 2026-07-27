import React, { useState } from 'react';
import Input from './components/ContactForm/Input';
import TextArea from './components/ContactForm/TextArea';
import Button from './components/ContactForm/Button';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Handle form submission
      console.log({ name, email, message });
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <Input
          id="name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
          required
        />
        <Input
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          required
        />
        <TextArea
          id="message"
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          error={errors.message}
          rows={4}
          required
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default ContactForm;
