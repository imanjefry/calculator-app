
import React, { useState, useCallback } from 'react';
import Display from './components/Display';
import Button from './components/Button';
import { calculatorButtons } from './constants';
import { ButtonType } from './types';

const App: React.FC = () => {
  const [currentValue, setCurrentValue] = useState<string>('0');
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [overwrite, setOverwrite] = useState<boolean>(true);

  const calculate = useCallback(() => {
    if (previousValue === null || operator === null) return currentValue;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    if (isNaN(prev) || isNaN(current)) return 'Error';

    let result: number;
    switch (operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        if (current === 0) return 'Error';
        result = prev / current;
        break;
      default:
        return 'Error';
    }
    return String(result);
  }, [currentValue, previousValue, operator]);

  const handleNumberClick = (value: string) => {
    if (overwrite) {
      setCurrentValue(value === '.' ? '0.' : value);
      setOverwrite(false);
    } else {
      if (value === '.' && currentValue.includes('.')) return;
      if (currentValue === '0' && value !== '.') {
         setCurrentValue(value);
      } else {
         setCurrentValue(currentValue + value);
      }
    }
  };

  const handleOperatorClick = (value: string) => {
    if (previousValue !== null && operator && !overwrite) {
      const result = calculate();
      setCurrentValue(result);
      setPreviousValue(result);
    } else {
      setPreviousValue(currentValue);
    }
    setOperator(value);
    setOverwrite(true);
  };
  
  const handleFunctionClick = (value: string) => {
    switch (value) {
      case 'clear':
        setCurrentValue('0');
        setPreviousValue(null);
        setOperator(null);
        setOverwrite(true);
        break;
      case 'toggleSign':
        setCurrentValue(String(parseFloat(currentValue) * -1));
        break;
      case 'percentage':
        setCurrentValue(String(parseFloat(currentValue) / 100));
        break;
    }
  };
  
  const handleEqualsClick = () => {
    if(operator && previousValue !== null) {
        const result = calculate();
        setCurrentValue(result);
        setPreviousValue(null);
        setOperator(null);
        setOverwrite(true);
    }
  };


  const handleButtonClick = (type: ButtonType, value: string) => {
    if(currentValue === 'Error' && value !== 'clear') return;
    switch (type) {
      case ButtonType.NUMBER:
        handleNumberClick(value);
        break;
      case ButtonType.OPERATOR:
        handleOperatorClick(value);
        break;
      case ButtonType.FUNCTION:
        handleFunctionClick(value);
        break;
      case ButtonType.EQUALS:
        handleEqualsClick();
        break;
    }
  };
  
  const getHistory = () => {
      if(operator) {
        return `${previousValue || ''} ${operator === '*' ? '×' : operator === '/' ? '÷' : operator} ${overwrite ? '' : currentValue}`
      }
      return '';
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto bg-black rounded-3xl p-6 shadow-2xl shadow-gray-800/50">
        <Display history={getHistory()} currentValue={currentValue} />
        <div className="grid grid-cols-4 gap-4">
          {calculatorButtons.map((btn) => (
            <Button
              key={btn.label}
              label={btn.label}
              type={btn.type}
              value={btn.value}
              onClick={() => handleButtonClick(btn.type, btn.value)}
              className={btn.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
