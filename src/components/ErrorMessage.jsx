import React from 'react';

function ErrorMessage({ message }) {
  return (
    <div className="bg-red-100 border-l-4 border-red-600 text-red-800 p-4 mb-6 rounded-lg shadow-sm animate-fade-in">
      <div className="flex items-start space-x-3">
        <div className="pt-1">
          <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path 
              fillRule="evenodd" 
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 00-2 0v3a1 1 0 002 0V7zm-1 7a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" 
              clipRule="evenodd" 
            />
          </svg>
        </div>
        <div>
          <h3 className="text-base font-semibold">Something went wrong</h3>
          <p className="mt-1 text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default ErrorMessage;
