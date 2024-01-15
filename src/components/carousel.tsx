import './carousel.css'
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DetallesRestaurante from './info-restaurantes.tsx';

function Carousel (){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            centerMode: true,
            centerPadding:"0px",
            responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    centerMode: true,
                    centerPadding:"0px"
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    centerMode: true,
                    centerPadding:"0px"
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding:"0px"
                }
            },{
                breakpoint: 280,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                centerMode: true,
                centerPadding: "0px",
            }}
            ]}
    return(
            <div className="carousel">
                <Slider {...settings}>
                    <DetallesRestaurante id={1}/>
                    <DetallesRestaurante id={2}/>
                    <DetallesRestaurante id={3}/>
                    <DetallesRestaurante id={4}/>
                </Slider>
            </div>
    );
}

export default Carousel;