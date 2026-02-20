import Link from "next/link";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function PrimaryButton({
  href,
  children,
  className = "",
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-primary-700 ${className}`}
    >
      {children}
    </Link>
  );
}
