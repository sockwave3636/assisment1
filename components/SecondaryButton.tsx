import Link from "next/link";
import { ReactNode } from "react";

interface SecondaryButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function SecondaryButton({
  href,
  children,
  className = "",
}: SecondaryButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-6 py-3 rounded-xl border-2 border-primary-600 bg-white text-base font-semibold text-primary-600 transition-colors duration-150 hover:bg-primary-50 active:bg-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${className}`}
    >
      {children}
    </Link>
  );
}
