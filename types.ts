
export enum ButtonType {
  OPERATOR,
  NUMBER,
  FUNCTION,
  EQUALS,
}

export interface CalculatorButton {
  label: string;
  type: ButtonType;
  value: string;
  className?: string;
}
