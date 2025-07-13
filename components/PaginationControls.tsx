import PaginationButton from "./PaginationButton";

interface PaginationControlsProps {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function PaginationControls({
  page,
  totalPages,
  onPrev,
  onNext,
}: PaginationControlsProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-8 flex justify-center space-x-4">
      <PaginationButton onClick={onPrev} disabled={page === 1}>
        Previous
      </PaginationButton>

      <span className="px-4 py-2 text-gray-700">
        Page {page} of {totalPages}
      </span>

      <PaginationButton onClick={onNext} disabled={page === totalPages}>
        Next
      </PaginationButton>
    </div>
  );
}
