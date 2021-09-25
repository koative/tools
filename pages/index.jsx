import Card from "components/Card.jsx";
import Filter from "components/Filter";
import Search from "components/Search";

const HomePage = ({ tools, categories }) => {
  return (
    <>
      <div className="lg:w-1/2 mx-auto my-8">
        <Search />
      </div>
      <Filter categories={categories} />

      <div className="grid mt-4 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool, index) => {
          return <Card {...tool} key={index} />;
        })}
      </div>
    </>
  );
};

export default HomePage;
