const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-100">
      <img src={src} alt="" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
        <button>
          <a
            className="inline-block mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            href={url}
          >
            Read More
          </a>
        </button>
      </div>
    </div>
  );
};

export default NewsItem;
