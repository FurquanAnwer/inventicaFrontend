import React from 'react';
import NewsCard from './NewsCard.jsx';
import LoadingSpinner from './LoadingSpinner.jsx';

function NewsResults({ results, isLoading }) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <LoadingSpinner />
      </div>
    );
  }

  if (!results || results.length === 0) {
    return (
      <div className="text-center text-neutral-300 py-12 text-lg font-medium bg-neutral-900 rounded-xl shadow-inner border border-neutral-800">
        🚫 No news articles found. Try searching for a different person.
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in-up">
      <h2 className="text-2xl font-bold text-shadow-gray-500 mb-4 text-center">
        📰 Search Results <span className="text-blue-400">({results.length})</span>
      </h2>

      <div className="space-y-6">
        {results.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}

export default NewsResults;
