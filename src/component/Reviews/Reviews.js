import imgs from "../../assets/image/2.jpg";
import { Carousel } from "react-bootstrap";
import './Reviews.css';

const Reviews = () => {
return (

    <section className="Reviews" id="Reviews">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-12">
          <h2>Reviews</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 col-lg-12">
          <Carousel>
            <Carousel.Item>
              <img src={imgs} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={imgs} />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={imgs} />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
)
}

export default Reviews;