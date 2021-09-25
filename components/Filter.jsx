import Router, { useRouter } from "next/router";

const Filter = ({ categories }) => {
  const router = useRouter();
  const { pathname, query } = router;
  const handleFilterClick = (e, category) => {
    e.preventDefault();
    console.log(category);
    if (typeof category === "string") {
      Router.push({ pathname, query: { ...query, category } });
    }
  };

  return (
    <div
      className="flex gap-2 px-4
    justify-center py-2 rounded-md my-8"
    >
      {categories?.map((category, index) => {
        return (
          <a
            href="#"
            key={index}
            className="px-3 py-1.5 text-gray-500 dark:text-gray-400 bg-white dark:hover:bg-gray-800  rounded-lg uppercase border border-gray-200 hover:bg-green-200 hover:bg-opacity-20 transition duration-200"
            onClick={(event) => handleFilterClick(event, category)}
          >
            {category}
          </a>
        );
      })}
    </div>
  );
};

export default Filter;
