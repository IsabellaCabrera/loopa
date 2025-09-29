export interface RadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  title: string;
  options: Array<{
    value: string;
    label: string;
    disabled?: boolean;
  }>;
  selectedValue: string;
  onChange: (value: string) => void;
  name: string;
}