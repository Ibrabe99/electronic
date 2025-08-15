import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../Data"; 
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./Slider.css";
import Counters from "../Counter/Counters";


const best_seller = Data.map((item) => {
  return (
    <div className="Cards" key={item.id}>
      <Card className="CardBody">
        <Card.Img variant="top" src={item.img} className="ImgCard" />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.text}</Card.Text>
          <Button variant="primary">Order Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
});

const Sliders = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200, // أقل من 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // أقل من 768px (تابلت)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  

  return (
    <section className="slider" id="slider">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12 heads">
            <h2>Best Seller</h2>
            <p><a href="/#"><MdKeyboardArrowLeft />view all </a></p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-lg-12">
            <Slider {...sliderSettings} className="skills-slider">
              {best_seller}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sliders;
