import { FC, ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export const Section: FC<SectionProps> = ({ title, children }) => (
  <div className="section">
    <div className="section-header">{title}</div>
    <div className="actions">{children}</div>
  </div>
);
