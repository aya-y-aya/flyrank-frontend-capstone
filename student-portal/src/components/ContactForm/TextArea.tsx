import React from 'react';
import styles from './ContactForm.module.css';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, error, ...props }) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={props.id} className={styles.label}>{label}</label>
      <textarea className={styles.textarea} {...props}></textarea>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default TextArea;

