import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, error, ...props }) => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{label}</label>
      <textarea {...props}></textarea>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default TextArea;
