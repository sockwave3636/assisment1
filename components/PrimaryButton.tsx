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
      className={`inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-6 py-3 rounded-xl bg-primary-600 text-base font-semibold text-white shadow-md transition-colors duration-150 hover:bg-primary-700 active:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${className}`}
    >
      {children}
    </Link>
  );
}
