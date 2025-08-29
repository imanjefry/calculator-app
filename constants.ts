
import { ButtonType, CalculatorButton } from './types';

export const calculatorButtons: CalculatorButton[] = [
  { label: 'AC', type: ButtonType.FUNCTION, value: 'clear' },
  { label: '+/-', type: ButtonType.FUNCTION, value: 'toggleSign' },
  { label: '%', type: ButtonType.FUNCTION, value: 'percentage' },
  { label: '÷', type: ButtonType.OPERATOR, value: '/' },

  { label: '7', type: ButtonType.NUMBER, value: '7' },
  { label: '8', type: ButtonType.NUMBER, value: '8' },
  { label: '9', type: ButtonType.NUMBER, value: '9' },
  { label: '×', type: ButtonType.OPERATOR, value: '*' },

  { label: '4', type: ButtonType.NUMBER, value: '4' },
  { label: '5', type: ButtonType.NUMBER, value: '5' },
  { label: '6', type: ButtonType.NUMBER, value: '6' },
  { label: '-', type: ButtonType.OPERATOR, value: '-' },
  
  { label: '1', type: ButtonType.NUMBER, value: '1' },
  { label: '2', type: ButtonType.NUMBER, value: '2' },
  { label: '3', type: ButtonType.NUMBER, value: '3' },
  { label: '+', type: ButtonType.OPERATOR, value: '+' },

  { label: '0', type: ButtonType.NUMBER, value: '0', className: 'col-span-2' },
  { label: '.', type: ButtonType.NUMBER, value: '.' },
  { label: '=', type: ButtonType.EQUALS, value: 'equals' },
];
