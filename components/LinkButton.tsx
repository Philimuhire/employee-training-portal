import Link from 'next/link';
import React from 'react';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function LinkButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: LinkButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-decoration-none';
  
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
  };

  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const linkClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <Link href={href} className={linkClasses}>
      {children}
    </Link>
  );
}