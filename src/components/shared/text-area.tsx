import { ChangeEvent, FC } from "react";

interface TextAreaProps {
  value: string;
  onChange(value: string): void;
  rows?: number;
  placeholder?: string;
}

export const TextArea: FC<TextAreaProps> = ({ value, onChange, rows = 8, placeholder }) => (
  <div className="textarea-field">
    <textarea
      rows={rows}
      value={value}
      placeholder={placeholder}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
    />
  </div>
);
