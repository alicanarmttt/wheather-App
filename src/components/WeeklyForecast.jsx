import { useSelector } from "react-redux";
import ForecastItem from "../components/ForecastItem";
import "../css/WeeklyForecast.css";
function WeeklyForecast() {
  const forecast = useSelector((store) => store.wheather.wheatherData.forecast);
  return (
    <div className="item-box">
      {/* map fonksiyonunda(her bir element, dizinin hangi elamanı olduğu) parametreleri kullanılır. forecast dizisi içindeki başlıkları props olarak ForecastItem komponentine gönderiyoruz. */}
      {forecast.map((element, index) => (
        <ForecastItem
          key={index}
          date={element.date}
          icon={element.day.condition.icon}
          condition={element.day.condition.text}
          maxTemp={element.day.maxtemp_c}
          minTemp={element.day.mintemp_c}
        ></ForecastItem>
      ))}
    </div>
  );
}

export default WeeklyForecast;
