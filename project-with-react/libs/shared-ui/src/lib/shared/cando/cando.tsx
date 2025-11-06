"use client";

export interface CanDoProps {
  thing: string;
}

export function CanDo({ thing }: CanDoProps) {
  return (
    <div className="flex items-center gap-2 hover:cursor-pointer">
      <svg
        className="h-4 w-4 text-green-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span className="font-bold text-[11px] hover:text-green-800 hover:text-[12px]">{thing}</span>
    </div>
  );
}

export default CanDo;
