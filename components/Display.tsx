
import React from 'react';

interface DisplayProps {
  history: string;
  currentValue: string;
}

const Display: React.FC<DisplayProps> = ({ history, currentValue }) => {
  const formatValue = (value: string) => {
    if (!value) return '0';
    try {
      const parts = value.split('.');
      parts[0] = parseFloat(parts[0]).toLocaleString('en-US');
      return parts.join('.');
    } catch (e) {
      return value;
    }
  };
  
  const formattedValue = formatValue(currentValue);
  const fontSize = formattedValue.length > 9 ? 'text-5xl' : 'text-7xl';

  return (
    <div className="bg-gray-900 text-white w-full rounded-lg p-6 mb-4 flex flex-col items-end justify-end break-words">
      <div className="h-8 text-2xl text-gray-400 font-light truncate">{history || ' '}</div>
      <div className={`h-20 font-light transition-font-size duration-200 ${fontSize} text-right w-full truncate`}>
        {formattedValue}
      </div>
    </div>
  );
};

export default Display;
