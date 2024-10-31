import CurrentWheather from "../components/CurrentWheather";
import DailyAdvice from "../components/DailyAdvice";
import WeeklyForecast from "../components/WeeklyForecast";
import "../css/HomePage.css";
function HomePage() {
  return (
    <div className="HomePage-body">
      <div className="cerceve">
        <CurrentWheather></CurrentWheather>
      </div>
      <div className="cerceve">
        <WeeklyForecast></WeeklyForecast>
      </div>
      <div className="cerceve">
        <DailyAdvice></DailyAdvice>
      </div>
    </div>
  );
}

export default HomePage;
