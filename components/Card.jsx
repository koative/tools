
const Card = ({name,categories,description,url,poster}) => {
  return (
    <div className='p-4 bg-white w-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300'>
      <div className='relative'>
        <img
          className='rounded-xl'
          src={poster || 'placeholder-image.png'}
          alt=''
        />

        <div className='absolute flex gap-1 -bottom-3 right-2 '>
          {categories.map((category, i) => (
            <a
              href={url}
              className='text-sm py-0.5 px-2 bg-white ring-1 ring-green-400 ring-opacity-30 rounded-lg'
              key={i}
            >
              {category}
            </a>
          ))}
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <div>
          <h1 className='mt-5 text-2xl font-light'>{name}</h1>

          <p className='mt-2'>
           {description.slice(0,120)}
           {description.length>120 && ' ...'}
          </p>
        </div>
        <div>
          {/* <button className='text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 '>
          Button 
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
