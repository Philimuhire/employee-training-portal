import Button from './Button';

interface EnrollButtonProps {
  isEnrolled: boolean;
  onToggle: () => void;
  loading?: boolean;
  className?: string;
}

export default function EnrollButton({ 
  isEnrolled, 
  onToggle, 
  loading = false,
  className = '' 
}: EnrollButtonProps) {
  return (
    <Button
      variant={isEnrolled ? 'danger' : 'primary'}
      onClick={onToggle}
      loading={loading}
      className={className}
    >
      {isEnrolled ? 'Unenroll' : 'Enroll'}
    </Button>
  );
}