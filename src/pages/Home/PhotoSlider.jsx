import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img7 from '../../assets/images/gallery/img7.jpg';
import img8 from '../../assets/images/gallery/img8.jpg';
import img9 from '../../assets/images/gallery/img9.jpg';
import img10 from '../../assets/images/gallery/img10.jpg';
import img11 from '../../assets/images/gallery/img11.jpg';
import img12 from '../../assets/images/gallery/img12.jpg';
import img13 from '../../assets/images/gallery/img13.jpg';
import img14 from '../../assets/images/gallery/img14.jpg';

const PhotoSlider = () => {
    const settings = {
        className: "center",
        dots: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="mt-20 px-5">
            <Slider {...settings} className="">
                <div>
                    <img src={img7} alt="" />
                </div>
                <div>
                    <img src={img8} alt="" />
                </div>
                <div>
                    <img src={img9} alt="" />
                </div>
                <div>
                    <img src={img10} alt="" />
                </div>
                <div>
                    <img src={img11} alt="" />
                </div>
                <div>
                    <img src={img12} alt="" />
                </div>
                <div>
                    <img src={img13} alt="" />
                </div>
                <div>
                    <img src={img14} alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default PhotoSlider;