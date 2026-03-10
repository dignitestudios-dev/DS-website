'use client';

export const dynamic = 'force-static';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}