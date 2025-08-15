import CountUp from "react-countup";
import './Counters.css';

const Counters = () => {
  return (
    <section className="Counters">
      <div className="container">

        <div className="row">

          <div className="col-md-3">
            <div className="CountersBox">
              <h2>
                <CountUp start={0} end={563} duration={3} separator="," />+
              </h2>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="CountersBox">
              <h2>
                <CountUp start={0} end={2434} duration={3} separator="," />+
              </h2>
              <p>Happy Clients</p>
            </div>
          </div>


          <div className="col-md-3">
            <div className="CountersBox">
              <h2>
                <CountUp start={0} end={3534} duration={3} separator="," />+
              </h2>
              <p>Happy Clients</p>
            </div>
          </div>


          <div className="col-md-3">
            <div className="CountersBox">
              <h2>
                <CountUp start={0} end={986} duration={3} separator="," />+
              </h2>
              <p>Happy Clients</p>
            </div>
          </div>


        </div>

      </div>
    </section>
  );
};

export default Counters;
