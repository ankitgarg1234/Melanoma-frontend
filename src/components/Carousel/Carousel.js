// // src/Carousel.js
// import React, { useState } from "react";
// import "./Carousel.css";
// const CarouselIndicators = ({ images, activeIndex, onClick }) => {
//   return (
//     <div className="carousel__indicators">
//       {images.map((_, index) => (
//         <span
//           key={index}
//           className={`carousel__indicator ${
//             index === activeIndex ? "active" : ""
//           }`}
//           onClick={() => onClick(index)}
//         />
//       ))}
//     </div>
//   );
// };
// const Carousel = ({ images, interval = 3000 }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const nextSlide = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };
//   const prevSlide = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };
//   const goToSlide = (index) => {
//     setActiveIndex(index);
//   };
//   // ...
//   return (
//     <div className="carousel">
//       <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
//         &lt;
//       </button>
//       <img
//         src={images[activeIndex]}
//         alt={`Slide ${activeIndex}`}
//         className="carousel__img"
//       />
//       <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
//         &gt;
//       </button>
//       <CarouselIndicators
//         images={images}
//         activeIndex={activeIndex}
//         onClick={goToSlide}
//       />
//     </div>
//   );
// };
// export default Carousel;




// {
//   images.map((image, index) => (
//     <div key={index}>
//       <Link
//         to={`/image?clickedImage=${encodeURIComponent(
//           image
//         )}&firstImage=${encodeURIComponent(firstImage)}`}
//       >
//         <img src={image} alt={`slide ${index + 1}`} style={{ width: "100%" }} />
//       </Link>
//     </div>
//   ));
// }
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
 const firstImage = images[0];
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          {index === 0 ? (
            <img
              src={image}
              alt={`slide ${index + 1}`}
              style={{ width: "100%" }}
            />
          ) : (
            <Link
              to={`/image?clickedImage=${encodeURIComponent(image)}&firstImage=${encodeURIComponent(images[0])}`}
            >
              <img
                src={image}
                alt={`slide ${index + 1}`}
                style={{ width: "100%" }}
              />
            </Link>
          )}
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;



