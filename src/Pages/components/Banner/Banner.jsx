
const Banner = () => {
    return (
        <div>



        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/MDnrqHP/Banner2.jpg" className="w-full rounded-2xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a> 
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/LSr96t1/Banner1.jpg" className="w-full rounded-2xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a> 
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/7R0cxsn/Banner4.jpg" className="w-full rounded-2xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a> 
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide4" className="carousel-item relative w-full ">
            <img src="https://i.ibb.co/n6Nsw1z/pexels-elina-sazonova-1838554.jpg" className="w-full rounded-2xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a> 
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
            </div>
    );
};

export default Banner;