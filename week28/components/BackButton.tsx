"use client";

import { useRouter } from "next/navigation";
import { FiArrowLeftCircle } from "react-icons/fi";

type Props = {
  className?: string;
};

export default function BackButton({ className = "" }: Props) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={`inline-flex items-center gap-2 text-gray-700 hover:text-black transition ${className}`}
      aria-label="뒤로가기"
    >
      <FiArrowLeftCircle className="text-xl" />
      <span className="text-sm font-medium">뒤로가기</span>
    </button>
  );
}
