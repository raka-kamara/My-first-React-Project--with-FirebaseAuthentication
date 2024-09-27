import { Link } from "react-router-dom";
const Estates = ({ estates }) => {
    const { estate_title, description, image, location, id} = estates;
    return (
        <div >
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize bg-orange-300 p-2 dark:text-gray-800 rounded-md"
            >
              {location}
            </a>
          </div>
          <Link to={`/details/${id}`} className="p-2 rounded-md bg-[#a38138] text-white">
            See details
          </Link>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={image}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-600">
                {estate_title}
              </h3>
            </a>
            <p className="leading-snug dark:text-gray-600">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Estates;