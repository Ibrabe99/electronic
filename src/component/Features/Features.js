import { LiaShippingFastSolid, LiaHeadsetSolid, LiaTagSolid } from "react-icons/lia";
import './Features.css';

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <div className="features-box">
              <div className="features-icon"><LiaShippingFastSolid /></div>
              <div className="features-text">
                <h3>Free Delivery</h3>
                <p>On all orders over $100</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="features-box">
              <div className="features-icon"><LiaHeadsetSolid /></div>
              <div className="features-text">
                <h3>24/7 Support</h3>
                <p>We are here to help</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="features-box">
              <div className="features-icon"><LiaTagSolid /></div>
              <div className="features-text">
                <h3>Best Prices</h3>
                <p>Guaranteed low prices</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
