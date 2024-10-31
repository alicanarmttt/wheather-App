import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/DailyAdvice.css";
function DailyAdvice() {
  const {
    wheatherData: {
      current: { temperature },
    },
  } = useSelector((store) => store.wheather);

  // Sıcaklığa göre tavsiye kartını döndüren fonksiyon
  const giveAdvice = () => {
    if (temperature >= 25) {
      return (
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="/img/tshirt.png"
            className="card-img-top"
            alt="Warm weather"
          />
          <div className="card-body">
            <p className="card-text">It's warm outside! Dress lightly.</p>
          </div>
        </div>
      );
    } else if (temperature >= 15 && temperature < 25) {
      return (
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="/img/jacket.png"
            className="card-img-top"
            alt="Mild weather"
          />
          <div className="card-body">
            <p className="card-text">
              It's a bit chilly. Consider wearing a jacket.
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="/img/mont.png"
            className="card-img-top"
            alt="Cold weather"
          />
          <div className="card-body">
            <p className="card-text">
              It's quite cold. Make sure to dress warmly!
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="advice">
      <h6>Daily Advice</h6>
      {giveAdvice()}
    </div>
  );
}

export default DailyAdvice;
