import { useEffect, useState } from "react";
import { getWheatherInfo } from "../redux/slices/wheatherSlice";
import { useDispatch, useSelector } from "react-redux";
import "../css/CurrentWheather.css";
import { IoWaterOutline } from "react-icons/io5";
import { LuWind } from "react-icons/lu";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function CurrentWheather() {
  const dispatch = useDispatch();
  const {
    wheatherData: { current },
    status,
    error,
  } = useSelector((store) => store.wheather);
  const [enterCity, setEnterCity] = useState("London");

  //Girilen inputu düzenleyip state e kaydetmek için fonksiyon.
  const handleCityName = (e) => {
    const formattedCity =
      e.target.value.charAt(0).toUpperCase() +
      e.target.value.slice(1).toLowerCase();
    setEnterCity(formattedCity);
  };

  //state e gelen şehri slice a gönderiyoruz.
  const getCityInfo = () => {
    if (enterCity) {
      dispatch(getWheatherInfo(enterCity));
    }
  };

  //uygulama başladığında
  useEffect(() => {
    getCityInfo();
  }, []);

  return (
    <div className="main-cerceve">
      <div className="mini-cerceve-derece" style={{ borderRight: "0px" }}>
        <input
          type="text"
          class="form-control"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Enter city name."
          value={enterCity}
          onChange={handleCityName}
          onKeyDown={(e) => {
            if (e.key === "Enter") getCityInfo(); // Enter tuşuyla şehir bilgisini çek
          }}
        ></input>
        <button
          type="button"
          onClick={getCityInfo}
          class="btn btn-outline-primary"
        >
          Ara
        </button>
      </div>
      {status === "loading" && <div>Loading...</div>}
      {status === "failed" && <div>Error: {error}</div>}
      {status === "succeeded" && current && (
        <>
          <div
            className="mini-cerceve-derece"
            style={{ marginLeft: "0", borderLeft: "0px", minWidth: "100px" }}
          >
            <h2 className="derece"> {current.temperature} °C</h2>
          </div>
          <div className="mini-cerceve">
            <img src={current.conditionIcon} alt="" />
            <h4>{current.conditionText}</h4>
          </div>
          <div
            className="mini-cerceve"
            style={{ flexDirection: "column", alignItems: "flex-start" }}
          >
            <div className="nem">
              <div>
                <h4>Humidity : </h4>
              </div>
              <div>
                <h4>{current.humidity}</h4>
              </div>
              <div style={{ marginLeft: "-5px", color: "blue" }}>
                <IoWaterOutline />
              </div>
            </div>
            <div className="ruzgar">
              <div>
                <h4>Wind : </h4>
              </div>
              <div>
                <h4>{current.wind} km/h</h4>
              </div>
              <div style={{ marginLeft: "-5px", color: "white" }}>
                <LuWind />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CurrentWheather;
