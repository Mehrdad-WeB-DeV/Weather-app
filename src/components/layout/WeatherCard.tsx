import { getWeatherIcon } from "../services/weatherIcon";


type Props = {
  city: string;
  temp: number;
  wind: number;
  code: number;
};

export default function WeatherCard({ city, temp, wind, code }: Props) {
  return (
    <div className="max-w-md mx-auto p-6 rounded-3xl 
    bg-white/30 dark:bg-black/30 
    backdrop-blur-md 
    border border-white/20 
    shadow-xl text-center">

      <h2 className="text-2xl font-bold mb-4">
        {city}
      </h2>

      <div className="text-6xl mb-3">
        {getWeatherIcon(code)}
      </div>

      <p className="text-4xl font-bold mb-2">
        {temp}°
      </p>

      <p className="text-lg">
        💨 باد: {wind} km/h
      </p>
    </div>
  );
}