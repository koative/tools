const Search = () => {
  return (
    <div className="relative flex w-full flex-wrap items-stretch mb-3">
      <span className="z-10 h-full leading-normal font-normal  text-center text-gray-400 absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-4">
        <i className="fas fa-search"></i>
      </span>
      <input
        type="text"
        placeholder="Search"
        className="px-3 py-4 placeholder-gray-400 text-gray-600 relative  bg-white rounded text-base border border-green-200 outline-none focus:outline-none focus:ring w-full focus:ring-green-200 pl-10 transition duration-200"
      />
    </div>
  );
};

export default Search;
