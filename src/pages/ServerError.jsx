import { Link } from "react-router";
import { RefreshCwIcon, ServerCrashIcon } from "lucide-react";

const ServerError = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white px-6">
      <div className="text-center max-w-md animate-fade-in">
        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-xl bg-indigo-500/10 flex items-center justify-center ring-1 ring-indigo-500/20">
            <ServerCrashIcon className="text-indigo-400" size={32} />
          </div>
        </div>

        {/* 503 Code */}
        <h1 className="text-5xl sm:text-6xl font-bold text-indigo-500/80 mb-3">
          503
        </h1>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          Server Unavailable
        </h2>

        {/* Subtitle */}
        <p className="text-slate-400 text-sm sm:text-base mb-8">
          Our server is currently down or under maintenance. Please try again
          after some time.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleRetry}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm font-medium transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2"
          >
            <RefreshCwIcon size={16} />
            Retry
          </button>

          <Link
            to="/login"
            className="text-slate-400 hover:text-white text-sm transition-colors"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServerError;
