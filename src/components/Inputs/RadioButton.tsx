import type { RadioButtonProps } from "../../types/radioButtons";

export const RadioButton = ({
  name,
  value,
  checked,
  onChange,
  label,
  disabled = false,
}: RadioButtonProps) => {
  return (
    <label 
      className={`
        flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200
        ${checked 
          ? 'border-morado bg-morado/5' 
          : 'border-gray-200  hover:border-gray-300'
        }
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      <span className={`text-lg font-medium ${checked ? 'text-morado' : 'text-gray-700'}`}>
        {label}
      </span>
      
      <div className="relative">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="sr-only"
        />
        
        {/* Custom radio button */}
        <div 
          className={`
            w-6 h-6 rounded-full border-2 transition-all duration-200 flex items-center justify-center
            ${checked 
              ? 'border-morado bg-morado' 
              : 'border-gray-300 bg-white'
            }
          `}
        >
          {checked && (
            <div className="w-2 h-2 rounded-full bg-white"></div>
          )}
        </div>
      </div>
    </label>
  );
};