import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src="/DogAndCat.jpg" className="d-block w-100" style={{ height: '900px' }} alt="Photo 1" />
        <Carousel.Caption>
          <h3>Dog and Cat</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/Piggies.jpg" className="d-block w-100" style={{ height: '900px' }} alt="Photo 3" />
        <Carousel.Caption>
          <h3>Guinea pigs</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/Cockapoo.jpg" className="d-block w-100" style={{ height: '900px' }} alt="Photo 4" />
        <Carousel.Caption>
          <h3>Cockapoo</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default ControlledCarousel;


//const Carousel = () => {
//     return (
//         <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
//         <ol class="carousel-indicators">
//           <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
//           <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
//           <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
//         </ol>
//         <div class="carousel-inner">
//           <div class="carousel-item active">
//             <img src="/photo1.jpg" class="d-block w-100" alt="Photo 1"/>
//             <div class="carousel-caption d-none d-md-block">
//               <h5>First slide label</h5>
//               <p></p>
//             </div>
//           </div>
//           <div class="carousel-item">
//             <img src="/photo3.jpg"  class="d-block w-100" alt="Photo 3"/>
//             <div class="carousel-caption d-none d-md-block">
//               <h5>Second slide label</h5>
//               <p></p>
//             </div>
//           </div>
//           <div class="carousel-item">
//             <img src="/photo4.jpg" class="d-block w-100" alt="Photo 4"/>
//             <div class="carousel-caption d-none d-md-block">
//               <h5>Third slide label</h5>
//               <p></p>
//             </div>
//           </div>
//         </div>
//         <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
//           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span class="sr-only">Previous</span>
//         </a>
//         <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
//           <span class="carousel-control-next-icon" aria-hidden="true"></span>
//           <span class="sr-only">Next</span>
//         </a>
//       </div>
//     );
// };

// export default Carousel;