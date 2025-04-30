import { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import NewsResults from "./components/NewsResults";
import ErrorMessage from "./components/ErrorMessage.jsx";
import "./App.css";

function App() {
  const [newsResults, setNewsResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchNews = async (name) => {
    if (!name || name.trim() === "") return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://inventicabackend.onrender.com/search?name=${encodeURIComponent(name)}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to fetch news");
      }

      const data = await response.json();
      setNewsResults(data?.news || []);
    } catch (err) {
      console.error("Error fetching news:", err);
      setError(err.message || "An error occurred while fetching news");
      setNewsResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-dvh bg-black text-white">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-br from-purple-800/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-gradient-to-tl from-cyan-800/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[30%] left-[60%] w-[30%] h-[30%] bg-gradient-to-tr from-amber-800/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 min-h-dvh flex flex-col justify-center items-center text-center">
        <header className="mb-10">
          

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-white">
              Person News Search
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white font-medium">
            Enter a person's name to find relevant news articles from trusted sources
          </p>
        </header>

        <div className="">
          <SearchBar onSearch={searchNews} />
        </div>

        {error && (
          <div className="w-full max-w-3xl mb-6">
            <ErrorMessage message={error} />
          </div>
        )}

        <div className="w-full max-w-4xl backdrop-blur-sm bg-white text-black rounded-xl shadow-lg border border-neutral-300 p-6">
          <NewsResults results={newsResults} isLoading={isLoading} />
        </div>

        <footer className="mt-10 text-sm text-neutral-400">
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-purple-400 transition">About</a>
            <a href="#" className="hover:text-purple-400 transition">Privacy</a>
            <a href="#" className="hover:text-purple-400 transition">Terms</a>
          </div>
          <p className="mt-2">© {new Date().getFullYear()} Person News Search. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
