import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  wheatherData: {
    current: {
      cityName: "",
      temperature: 0,
      conditionText: "",
      conditionIcon: "",
      humidity: 0,
      wind: 0,
    },
    forecast: [],
    advice: "",
  },
  status: "idle", // API isteği durumları için (idle, loading, succeeded, failed)
  error: null, // Hata mesajları için
};
const API_KEY = "ec3504468a694166bed132709242410";

export const getWheatherInfo = createAsyncThunk(
  "wheather",
  async (cityName) => {
    const response =
      await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=7&aqi=yes&alerts=yes
`);
    console.log(response.data);
    return response.data;
  }
);

export const wheatherSlice = createSlice({
  name: "wheather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWheatherInfo.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getWheatherInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        const data = action.payload;
        state.wheatherData.current.cityName = data.location.name;
        state.wheatherData.current.temperature = data.current.temp_c;
        state.wheatherData.current.conditionText = data.current.condition.text;
        state.wheatherData.current.conditionIcon = data.current.condition.icon;
        state.wheatherData.current.humidity = data.current.humidity;
        state.wheatherData.current.wind = data.current.wind_kph;

        state.wheatherData.forecast = data.forecast.forecastday;
        state.wheatherData.advice =
          data.current.temp_C > 20
            ? "It’s warm outside, wear light clothes."
            : "It’s a bit chilly, consider a jacket!";
      })
      .addCase(getWheatherInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default wheatherSlice.reducer;
