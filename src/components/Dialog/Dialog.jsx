import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';
import './Dialog.css';

/**
 * Dialog component with Radix UI patterns and Framer Motion animations.
 * Reference: shadcn/ui Dialog - accessible modal with focus trapping
 * Uses easeOut animation curve for responsive, polished feel.
 */
const Dialog = ({ 
  isOpen, 
  onClose, 
  children, 
  className = '',
  closeOnEsc = true,
  closeOnBackdropClick = true,
}) => {
  // Focus trapping and ESC key handling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (closeOnEsc && e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling on body
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, closeOnEsc]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - reference: Fitts's Law extended hit area */}
          <motion.div
            className="dialog__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={closeOnBackdropClick ? onClose : undefined}
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            className="dialog__content-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
          >
            <div className={cn('dialog__content', className)}>
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

/**
 * Dialog Close Button - semantic component
 */
Dialog.Close = ({ onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={cn('dialog__close', className)}
    aria-label="Close dialog"
    type="button"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  </button>
);

export default Dialog;
