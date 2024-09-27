import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const estates = useLoaderData();
    const {id} = useParams();

    const estateInt = parseInt(id);
    const estate = estates.find((estate) => estate.id === estateInt)
    return (
        <div className="container my-24 mx-auto ">
        <div className="card bg-base-100 shadow-xl md:w-fit mx-auto">
          <figure>
            <img
              src={estate.image}
              alt="Album"
              className="block object-cover object-center w-full md:w-[900px] rounded-md h-[500px] dark:bg-gray-500"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{estate.estate_title}</h2>
            <p>Description: {estate.description}</p>
            <hr />
            <p><span className="font-bold">Price: </span>{estate.price}</p>
            <hr />
            <p><span className="font-bold">Area: </span>{estate.area}</p>
            <p> <span className="font-bold">Facilities:</span> <span className="text-[#a38138]">#{estate.facilities[0]} #{estate.facilities[1]} #{estate.facilities[2]} #{estate.facilities[3]}</span></p>
            <hr />
            <table className="md:w-[500px]">
              <tr>
                <td className="opacity-80">Location:</td>
                <td className="font-bold">{estate.location}</td>
              </tr>
              <tr>
                <td className="opacity-80">Status:</td>
                <td className="font-bold">{estate.status}</td>
              </tr>
              <tr>
                <td className="opacity-80">Segment:</td>
                <td className="font-bold">{estate.segment_name}</td>
              </tr>
              
            </table>
            <div className="card-actions justify-end gap-10">
              {/* <button onClick={handleRead} className="btn bg-white w-24 border">Read</button> */}
              {/* <button onClick={handleWishlist} className="btn w-24  bg-[#50B1C9] border-none text-white */}
              {/* ">Wishlist</button> */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;