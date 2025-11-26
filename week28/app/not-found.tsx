import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-sm text-gray-500 mb-2">404</p>
        <h1 className="text-3xl font-bold mb-3">페이지를 찾을 수 없어요</h1>
        <p className="text-gray-600 mb-6">
          존재하지 않는 프로젝트이거나 주소가 잘못되었어요.
        </p>

        <div className="flex gap-3 justify-center">
          <Link
            href="/projects"
            className="px-4 py-2 rounded-lg border border-gray-200 hover:shadow-sm transition"
          >
            프로젝트 목록
          </Link>
          <Link
            href="/"
            className="px-4 py-2 rounded-lg bg-black text-white hover:opacity-90 transition"
          >
            홈으로
          </Link>
        </div>
      </div>
    </div>
  );
}
