'use client';

export default function Card({ children, className = '', hover = false }) {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800
        rounded-lg shadow-md
        border border-gray-200 dark:border-gray-700
        ${hover ? 'transition-transform duration-200 hover:scale-105 hover:shadow-lg' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
