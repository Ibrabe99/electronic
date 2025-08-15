import { LiaMapMarkedAltSolid, LiaPhoneSolid } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";
import './Info.css';

const Info = () => {
  return (
    <section className="Info" id="Info">
      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <div className="Info-box">
              <div className="Info-icon"><LiaMapMarkedAltSolid /></div>
              <div className="Info-text">
                <h3>Map</h3>
                <p>Libya - mergap</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="Info-box">
              <div className="Info-icon"><LiaPhoneSolid /></div>
              <div className="Info-text">
                <h3>Phone</h3>
                <p>09*-**********</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="Info-box">
              <div className="Info-icon"><TfiEmail /></div>
              <div className="Info-text">
                <h3>E-mail</h3>
                <p>Test@Test.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Info;
