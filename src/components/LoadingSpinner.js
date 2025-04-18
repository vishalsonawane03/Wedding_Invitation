// components/LoadingSpinner.js
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-600 border-opacity-75"></div>
    </div>
  );
};

export default LoadingSpinner;
