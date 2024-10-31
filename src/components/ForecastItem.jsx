import PropTypes from "prop-types";
import "../css/ForecastItem.css";
// Tarihi oluştururken formatlamak için:
function formatDate(dateString) {
  const date = new Date(dateString); // 2024-11-05 gibi bir tarih alır.
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function ForecastItem({ date, icon, condition, maxTemp, minTemp }) {
  const formattedDate = formatDate(date);
  return (
    <div className="forecast-item">
      <div className="baslık">
        <h7>{formattedDate}</h7>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <img src={icon} alt="wheather icon" />
          <p style={{ minWidth: "100px" }}>{condition}</p>
        </div>
        <div style={{ marginTop: "25px" }}>
          <p>{maxTemp}°C</p>
          <p>{minTemp}°C</p>
        </div>
      </div>
    </div>
  );
}

// PropTypes tanımlamaları
ForecastItem.propTypes = {
  date: PropTypes.string.isRequired, // Tarih bir string olmalı
  icon: PropTypes.string.isRequired, // İkonun URL'si string olmalı
  condition: PropTypes.string.isRequired, // Hava durumu açıklaması string olmalı
  maxTemp: PropTypes.number.isRequired, // Maksimum sıcaklık bir sayı olmalı
  minTemp: PropTypes.number.isRequired, // Minimum sıcaklık bir sayı olmalı
};
export default ForecastItem;
