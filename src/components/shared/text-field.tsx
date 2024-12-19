import { ChangeEvent, FC } from "react";

interface TextFieldProps {
  label: string;
  value: string;
  onChange(value: string): void;
  placeholder?: string;
}

export const TextField: FC<TextFieldProps> = ({ label, value, onChange, placeholder }) => (
  <div className="text-field">
    <label>{label}</label>
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    />
  </div>
);
