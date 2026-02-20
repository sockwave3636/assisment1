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
      className={`inline-flex items-center justify-center rounded-2xl border-2 border-primary-600 bg-white px-6 py-3 text-base font-semibold text-primary-600 transition hover:bg-primary-50 ${className}`}
    >
      {children}
    </Link>
  );
}
