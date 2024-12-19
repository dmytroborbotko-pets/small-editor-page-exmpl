import { FC, ReactNode } from "react";
import classNames from "classnames";

interface ActionProps {
  children: ReactNode;
  onClick(): void;
}

export const Action: FC<ActionProps> = ({ children, onClick }) => (
  <button className={classNames("action")} onClick={onClick}>
    {children}
  </button>
);
