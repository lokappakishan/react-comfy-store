import React from 'react';
import { useNavigation } from 'react-router-dom';

interface SubmitBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  size?: string;
}

const SubmitBtn = ({
  text = 'submit',
  size = 'btn-sm',
  className = '',
  ...rest
}: SubmitBtnProps) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`btn btn-primary btn-block ${size} ${className}`}
      {...rest}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner">sending ...</span>
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default SubmitBtn;
