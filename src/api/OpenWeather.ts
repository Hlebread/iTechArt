import api from "../axios/axiosInstance";

const defaultCity = "Minsk";

export default class OpenWeather {
  static async get(location?: any) {
    let apiQuery = location?.coords
      ? {
          lat: location.coords.latitude,
          lon: location.coords.longitude,
        }
      : {
          q: defaultCity,
        };

    try {
      const { data } = await api.get("/onecall", {
        params: {
          ...apiQuery,
        },
      });
      data.current.city = data.timezone.split("/")[1];
      data.current.updated = new Date();
      return data;
    } catch (error) {
      console.error("Ошибка получения погоды. Причина: " + error);
    }
  }
}
