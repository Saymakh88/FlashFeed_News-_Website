// import { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";

// const NewsBoard = ({ category }) => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
//       import.meta.env.VITE_API_KEY
//     }`;
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => setArticles(data.articles));
//   }, [category]);

//   return (
//     <div className="mt-4">
//       <h2 className="text-center font-semibold text-xl">
//         Latest{" "}
//         <span className="bg-red-600 text-white px-2 py-1 rounded">News</span>
//       </h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
//         {articles.map((news, index) => {
//           return (
//             <NewsItem
//               key={index}
//               title={news.title}
//               description={news.description}
//               src={news.urlToImage}
//               url={news.url}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default NewsBoard;

import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        const data = await res.json();
        if (data.status === "ok") {
          setArticles(data.articles);
        } else {
          setError(data.message || "Something went wrong");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="mt-4">
      <h2 className="text-center font-semibold text-xl">
        Latest{" "}
        <span className="bg-red-600 text-white px-2 py-1 rounded">News</span>
      </h2>

      {loading && <p className="text-center mt-4">Loading news...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
        {!loading &&
          !error &&
          articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))}
      </div>
    </div>
  );
};

export default NewsBoard;
