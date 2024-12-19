import classNames from "classnames";
import { ReactNode } from "react";

interface ButtonGroupOption<T> {
  value: T;
  icon: ReactNode;
}

interface ButtonGroupProps<T> {
  label: string;
  value: T;
  options: ButtonGroupOption<T>[];
  onChange(value: T): void;
}

export const ButtonGroup = <T extends string>({ label, value, options, onChange }: ButtonGroupProps<T>) => (
  <div className="button-group-field">
    <label>{label}</label>
    <div className="button-group">
      {options.map((option) => (
        <button
          key={option.value}
          className={classNames({ selected: option.value === value })}
          onClick={() => onChange(option.value)}
        >
          {option.icon}
        </button>
      ))}
    </div>
  </div>
);
