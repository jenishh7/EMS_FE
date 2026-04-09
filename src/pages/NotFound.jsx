import { Link } from "react-router";
import { ArrowLeftIcon } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white px-6">
      <div className="text-center max-w-md animate-fade-in">
        {/* 404 Number */}
        <h1 className="text-7xl sm:text-8xl font-bold text-indigo-500/80 mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          Page Not Found
        </h2>

        {/* Subtitle */}
        <p className="text-slate-400 text-sm sm:text-base mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/login"
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm font-medium transition-all shadow-lg shadow-indigo-500/20"
          >
            Go to Login
          </Link>

          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
          >
            <ArrowLeftIcon size={16} />
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
