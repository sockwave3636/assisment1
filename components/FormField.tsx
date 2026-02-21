"use client";

/**
 * Accessible form field with label above input, instructions before field.
 * Use for forms with logical vertical flow.
 */

import { InputHTMLAttributes, LabelHTMLAttributes } from "react";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  instruction?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
  inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "aria-describedby" | "aria-invalid">;
  labelProps?: Omit<LabelHTMLAttributes<HTMLLabelElement>, "htmlFor">;
}

export default function FormField({
  id,
  label,
  type = "text",
  placeholder,
  instruction,
  error,
  required,
  autoComplete,
  inputProps = {},
  labelProps = {},
}: FormFieldProps) {
  const describedBy = [instruction && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-900"
        style={{ lineHeight: 1.5 }}
        {...labelProps}
      >
        {label}
        {required && <span className="text-primary-600 ml-1" aria-hidden="true">*</span>}
      </label>
      {instruction && (
        <p id={`${id}-hint`} className="text-sm text-gray-600" style={{ lineHeight: 1.5 }}>
          {instruction}
        </p>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        aria-describedby={describedBy}
        aria-invalid={!!error}
        className="block w-full min-h-[44px] px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
        style={{ lineHeight: 1.5 }}
        {...inputProps}
      />
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
