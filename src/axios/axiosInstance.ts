import axios from "axios";

export default axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    units: "metric",
    appid: "6ccd239f687fefdccaac2f5aa8ee47d6",
    exclude: "minutely,hourly",
  },
});
