import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Estates from "../components/Estates/Estates";

const Home = () => {
    const estates = useLoaderData();
    return (
        <div>     
        <div className="my-20"><Banner></Banner></div>  

        <div className="grid md:grid-cols-2 gap-5">
            {
                estates.map(estate => <Estates
                    key={estate.id}
                    estates = {estate}
                ></Estates>)
            }

        </div>

      
    </div>
    );
};

export default Home;