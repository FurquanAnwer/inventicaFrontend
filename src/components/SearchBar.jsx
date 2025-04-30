import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') onSearch(searchTerm);
  };

  return (
    <div className="mb-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-neutral-300 shadow-lg rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-center"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="🔍 Search for a person..."
          className="w-full flex-grow px-5 py-3 text-lg bg-neutral-100 text-black placeholder:text-neutral-500 rounded-lg border border-neutral-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          aria-label="Search input"
        />

        <button
        type="submit"
        className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-br from-black via-gray-900 to-neutral-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
        Search
        </button>

      </form>
    </div>
  );
}

export default SearchBar;
