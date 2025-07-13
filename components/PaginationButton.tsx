interface PaginationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function PaginationButton({ children, ...props }: PaginationButtonProps) {
  return (
    <button
      {...props}
      className={`px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 ${
        props.className || ''
      }`}
    >
      {children}
    </button>
  );
}
