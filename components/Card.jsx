const Card = () => {
  return (
    <div className='p-4 bg-white w-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300'>
      <div className='relative'>
        <img
          className='rounded-xl'
          src='https://images.unsplash.com/photo-1564865878688-9a244444042a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
          alt=''
        />

        <div className='absolute flex gap-1 -bottom-3 right-2 '>
          {['frontend', 'ui', 'ux', 'color'].map((item) => (
            <a
              href='#'
              className='text-sm py-0.5 px-2 bg-white ring-1 ring-green-400 ring-opacity-30 rounded-lg'
              key={item}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <div>
          <h1 className='mt-5 text-2xl font-light'>coolors.co</h1>

          <p className='mt-2'>
            Generate or browse beautiful color combinations for your designs.
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
