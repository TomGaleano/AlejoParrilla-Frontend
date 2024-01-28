import './carousel.css'
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DetallesRestaurante from './info-restaurantes.tsx';

function Carousel (){
  // const [selectedItem, setSelectedItem] = useState(null);
  // console.log(selectedItem);
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
            centerMode: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      infinite: true,
                      dots: true,
                      centerMode: false,
                      centerPadding: "0px",
                    }
                  },
                  {
                    breakpoint: 790,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      initialSlide: 0,
                      centerMode: false,
                      centerPadding: "0px",
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      centerMode: true,
                      centerPadding: "0px",
                    }
                  }
            ]}
    return(
            <div className="carousel">
                <Slider {...settings} className='carousel-slider'>
                  <div className="carousel-box">
                    <DetallesRestaurante id={1}/>
                  </div>
                  <div className="carousel-box">
                    <DetallesRestaurante id={2}/>
                  </div>
                  <div className="carousel-box">
                    <DetallesRestaurante id={3}/>
                  </div>
                  <div className="carousel-box" style={{'margin': '0 10px;'}}>
                    <DetallesRestaurante id={4}/>
                  </div>
                </Slider>
            </div>
    );
}

export default Carousel;