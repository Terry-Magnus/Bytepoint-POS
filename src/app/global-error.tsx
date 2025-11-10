"use client";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary?: () => void;
}

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-semibold text-red-600 mb-4">
        Something went wrong!
      </h2>
      <pre className="text-sm text-gray-600 mb-4">{error?.message}</pre>
      <button
        className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
        onClick={resetErrorBoundary}
      >
        Try Again
      </button>
    </div>
  );
}
