// src/app/auth/error/page.tsx
export default function AuthError() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Authentication Error
        </h1>
        <p className="text-gray-600 mb-4">
          There was a problem signing you in. Please try again.
        </p>
        <a 
          href="/"
          className="inline-block bg-primary text-white px-6 py-2 rounded-lg"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}