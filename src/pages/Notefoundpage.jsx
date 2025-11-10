import React from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Redirect to homepage
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 px-4 text-center">
      {/* 404 Text */}
      <h1 className="text-9xl font-extrabold text-white animate-bounce">404</h1>

      {/* Message */}
      <p className="text-2xl md:text-3xl mt-4 text-white font-semibold">
        Oops! Page not found.
      </p>
      <p className="text-white/80 mt-2">
        The page you are looking for does not exist.
      </p>

      {/* Button */}
      <button
        onClick={handleGoHome}
        className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition-all"
      >
        Go to Home
      </button>

      {/* Illustration */}
      <div className="mt-10">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
          alt="Not Found Illustration"
          className="w-60 h-60 mx-auto animate-pulse"
        />
      </div>
    </div>
  );
}

export default NotFoundPage;