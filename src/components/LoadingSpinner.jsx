import React from 'react';
import { ClipLoader } from 'react-spinners';

function LoadingSpinner() {
  return (
    <div className="flex flex-col justify-center items-center py-12">
      <ClipLoader 
        color="#2563eb" 
        size={48}
        speedMultiplier={1}
      />
      <span className="mt-4 text-gray-700 font-medium">Loading...</span>
    </div>
  );
}

export default LoadingSpinner;
