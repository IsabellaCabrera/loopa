import type { RadioGroupProps } from "../../types/radioButtons";
import { RadioButton } from "./RadioButton";

export const RadioGroup = ({
  title,
  options,
  selectedValue,
  onChange,
  name,
}: RadioGroupProps) => {
  return (
    <div className="mb-6">
      <h4 className="text-morado font-medium mb-4 text-lg">{title}</h4>
      <div className="space-y-3">
        {options.map((option) => (
          <RadioButton
            key={option.value}
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onChange}
            label={option.label}
            disabled={option.disabled}
          />
        ))}
      </div>
    </div>
  );
};