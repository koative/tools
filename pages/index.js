import Card from 'components/Card.jsx';

const HomePage = () => {
  return (
    <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6   justify-center '>
      {[...new Array(30)].map(() => (
        <Card />
      ))}
    </div>
  );
};

export default HomePage;
