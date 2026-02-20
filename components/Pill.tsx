import { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
  className?: string;
}

export default function Pill({ children, className = "" }: PillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700 ring-1 ring-primary-200 ${className}`}
    >
      {children}
    </span>
  );
}
