import { useRef, useEffect, useState } from 'react';
import './AddServiceModal.css';

export interface NewServiceData {
  name: string;
  badge: string;
  price: string;
  duration: string;
  desc: string;
}

interface AddServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (service: NewServiceData) => void;
}

export default function AddServiceModal({ isOpen, onClose, onSave }: AddServiceModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [name, setName] = useState('');
  const [badge, setBadge] = useState('Beginner');
  const [price, setPrice] = useState('600');
  const [duration, setDuration] = useState('60 mins');
  const [desc, setDesc] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  // Handle native backdrop clicks and Esc key
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleBackdropClick = (e: MouseEvent) => {
      if (e.target === dialog) {
        const rect = dialog.getBoundingClientRect();
        const isOutside =
          rect.top > e.clientY ||
          e.clientY > rect.top + rect.height ||
          rect.left > e.clientX ||
          e.clientX > rect.left + rect.width;

        if (isOutside) {
          onClose();
        }
      }
    };

    const handleCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };

    dialog.addEventListener('click', handleBackdropClick);
    dialog.addEventListener('cancel', handleCancel);

    return () => {
      dialog.removeEventListener('click', handleBackdropClick);
      dialog.removeEventListener('cancel', handleCancel);
    };
  }, [onClose]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = 'Service name is required';
    if (!price || Number(price) <= 0) newErrors.price = 'Please enter a valid price';
    if (!desc.trim()) newErrors.desc = 'Description is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSave({
      name: name.trim(),
      badge,
      price: `₱${price}`,
      duration,
      desc: desc.trim(),
    });

    // Reset form
    setName('');
    setBadge('Beginner');
    setPrice('600');
    setDuration('60 mins');
    setDesc('');
    setErrors({});
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="service-modal"
      aria-labelledby="add-service-title"
    >
      <div className="modal-header">
        <h2 id="add-service-title" className="modal-title">
          Create New Service
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="close-button"
          aria-label="Close dialog"
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit} className="modal-form">
        <div className="form-group">
          <label htmlFor="service-name" className="form-label">
            Service Name *
          </label>
          <input
            id="service-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Business Korean Mentorship"
            className="form-input"
            autoFocus
          />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="service-badge" className="form-label">
              Category / Level
            </label>
            <select
              id="service-badge"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              className="form-select"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Core Skill">Core Skill</option>
              <option value="Conversation">Conversation</option>
              <option value="Exam Prep">Exam Prep</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="service-duration" className="form-label">
              Duration
            </label>
            <select
              id="service-duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="form-select"
            >
              <option value="30 mins">30 mins</option>
              <option value="45 mins">45 mins</option>
              <option value="60 mins">60 mins</option>
              <option value="90 mins">90 mins</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="service-price" className="form-label">
            Base Price (₱) *
          </label>
          <input
            id="service-price"
            type="number"
            min="0"
            step="50"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="form-input"
          />
          {errors.price && <span className="field-error">{errors.price}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="service-desc" className="form-label">
            Description *
          </label>
          <textarea
            id="service-desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Outline what students will learn in this session..."
            className="form-textarea"
          />
          {errors.desc && <span className="field-error">{errors.desc}</span>}
        </div>

        <div className="modal-actions">
          <button
            type="button"
            onClick={onClose}
            className="cancel-btn"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="save-btn"
          >
            Create Service
          </button>
        </div>
      </form>
    </dialog>
  );
}

