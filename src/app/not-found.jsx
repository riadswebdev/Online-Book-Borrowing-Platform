"use client";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">
      <div className="text-center">
        {/* 404 Number */}
        <h1 className="text-7xl md:text-9xl font-bold bg-linear-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
          Oops! Page Not Found
        </h2>

        <p className="mt-2 text-gray-400 max-w-md mx-auto">Try Again Later</p>

        <div className="mt-6">
          <Link
            href="/"
            className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
