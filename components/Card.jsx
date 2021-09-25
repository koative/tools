import Image from "next/image";

const Card = ({ title, categories, description, url, poster }) => {
  return (
    <div className="flex flex-col">
      <div className="bg-white border border-gray-200 rounded-3xl p-4 hover:border-green-300 transform duration-200 ">
        <div className="flex">
          <div className="h-48 w-48 mb-0  flex-shrink-0">
            <Image
              width={192}
              height={192}
              src={poster ? `/tools/${poster}` : "/placeholder-image.png"}
              alt={title}
              className="w-full object-scale-down lg:object-cover lg:h-48 rounded-2xl"
            />
          </div>
          <div className="flex-auto ml-3 justify-evenly py-2">
            <div className="flex flex-col">
              <h2 className="flex-auto text-lg font-medium">{title}</h2>
              <div className="flex gap-2">
                {categories.map((category, index) => (
                  <span
                    className="text-xs text-green-700 font-medium  px-0.5 rounded-sm"
                    key={index}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex pt-2 mb-4  text-sm text-gray-500 h-16">
              <p className="h-full">
                {description.length > 120
                  ? `${description.slice(0, 120)}...`
                  : description}
              </p>
            </div>
            <div className="flex space-x-3 text-sm font-medium justify-end">
              <a
                href={url}
                className="mb-2 md:mb-0 bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <span>Go Tool</span>
                <span className="text-green-400 hover:text-green-500 text-lg">
                  <i className="bx bx-link-external"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
