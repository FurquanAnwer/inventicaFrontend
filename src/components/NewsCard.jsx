import React from 'react';

function NewsCard({ article }) {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(date);
    } catch {
      return '';
    }
  };

  return (
    <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 p-6">
      <div className="flex flex-col md:flex-row gap-5">
        {article.imageUrl && (
          <div className="w-full md:w-1/3 h-48 md:h-auto overflow-hidden rounded-lg">
            <img
              src={article.imageUrl}
              alt={article.title || 'News image'}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
              }}
            />
          </div>
        )}

        <div className={`flex flex-col justify-between ${article.imageUrl ? 'md:w-2/3' : 'w-full'}`}>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {article.title || 'Untitled Article'}
            </h3>

            {article.date && (
              <p className="text-sm text-gray-500 mb-2">{formatDate(article.date)}</p>
            )}

            {article.snippet && (
              <p className="text-gray-700 mb-3 text-base leading-relaxed line-clamp-4">
                {article.snippet}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between mt-2">
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              🔗 Read Full Article →
            </a>

            {article.source && (
              <span className="text-sm text-gray-600">
                 {article.source}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
