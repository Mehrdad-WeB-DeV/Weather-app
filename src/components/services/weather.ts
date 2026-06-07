import axios from "axios";


export const getWeather = async (lat: number, lon: number) => {
  const res = await axios.get(
    "https://api.open-meteo.com/v1/forecast",
    {
      params: {
        latitude: lat,
        longitude: lon,
        current: "temperature_2m,wind_speed_10m,weathercode",
        daily: "temperature_2m_max,temperature_2m_min,weathercode",
        timezone: "auto",
      },
    }
  );

  return res.data;
};

export const searchCity = async (name: string) => {
  const res = await axios.get(
    "https://geocoding-api.open-meteo.com/v1/search",
    {
      params: {
        name,
        count: 1,
        language: "fa",
      },
    }
  );

  return res.data;
};

export const getDefaultLocation = () => {
  return {
    lat: 35.6892,
    lon: 51.3890,
    city: "Tehran",
  };
};