import React from 'react';

const PageLoader = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-orange-200 rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-orange-600 rounded-full animate-spin"></div>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Loading...</h3>
          <p className="text-sm text-gray-500">Please wait while we prepare your content</p>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;