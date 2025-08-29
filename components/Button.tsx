
import React from 'react';
import { ButtonType } from '../types';

interface ButtonProps {
  label: string;
  type: ButtonType;
  onClick: (value: string) => void;
  value: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, type, onClick, value, className = '' }) => {
  const baseClasses = 'rounded-full text-3xl font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 ease-in-out transform active:scale-95 flex items-center justify-center aspect-square';

  const typeClasses = {
    [ButtonType.NUMBER]: 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500',
    [ButtonType.OPERATOR]: 'bg-orange-500 text-white hover:bg-orange-400 focus:ring-orange-400',
    [ButtonType.FUNCTION]: 'bg-gray-400 text-black hover:bg-gray-300 focus:ring-gray-300',
    [ButtonType.EQUALS]: 'bg-orange-500 text-white hover:bg-orange-400 focus:ring-orange-400',
  };

  return (
    <button
      onClick={() => onClick(value)}
      className={`${baseClasses} ${typeClasses[type]} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
