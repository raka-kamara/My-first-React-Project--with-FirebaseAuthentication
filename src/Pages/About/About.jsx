import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <h1
        class="animate__animated animate__bounce font-bold text-2xl text text-center my-5 py-5 bg-gray-300
            rounded-2xl animate__repeat-3"
      >
        ABOUT US
      </h1>


      <div className="flex flex-col items-center justify-center p-5  gap-10">


        <div className="card w-96 bg-base-100 shadow-xl image-full" data-aos="fade-left">
          <figure>
            <img
              src="https://i.ibb.co/MDnrqHP/Banner2.jpg"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Who are We?</h2>
            <p>We are a team of dedicated professionals passionate about delivering exceptional real estate experiences. With years of expertise in the luxury property market, we pride ourselves on our commitment to excellence and personalized service. </p>
            <div className="card-actions justify-end">
             
            </div>
          </div>
        </div>


        <div className="card w-96 bg-base-100 shadow-xl image-full" data-aos="fade-right">
          <figure>
            <img
              src="https://i.ibb.co/7R0cxsn/Banner4.jpg"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Our Services</h2>
            <p>At Luxury Estate, we offer a comprehensive range of services tailored to meet the unique needs of our esteemed clientele. Whether you're buying, selling, or investing in luxury properties, our team is equipped with the knowledge and resources to exceed your expectations.</p>
            <div className="card-actions justify-end">
             
            </div>
          </div>
        </div>


        <div className="card w-96 bg-base-100 shadow-xl image-full" data-aos="fade-down">
          <figure>
            <img
              src="https://i.ibb.co/n6Nsw1z/pexels-elina-sazonova-1838554.jpg"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Our Quality</h2>
            <p>Quality is at the heart of everything we do at Luxury Estate. From the selection of properties to the execution of transactions, we uphold the highest standards of excellence to ensure the utmost satisfaction of our clients. </p>
            <div className="card-actions justify-end">
             
            </div>
          </div>
        </div>



      </div>

    </div>
  );
};

export default About;
