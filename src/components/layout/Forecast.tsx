import { getWeatherIcon } from "../services/weatherIcon";


type Props = {
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weathercode: number[];
  };
};

export default function Forecast({ daily }: Props) {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      
      <h2 className="text-xl font-bold mb-4 text-center">
        پیش‌بینی ۷ روزه
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-7 gap-3">
        
        {daily.time.map((day, index) => (
          <div
            key={day}
            className="p-3 rounded-2xl bg-white/30 dark:bg-black/30 backdrop-blur-md text-center border border-white/20"
          >
            
            <p className="text-sm mb-2">
              {new Date(day).toLocaleDateString("fa-IR", {
                weekday: "short",
              })}
            </p>

            <div className="text-3xl mb-2">
              {getWeatherIcon(daily.weathercode[index])}
            </div>

            <p className="text-sm">
              {daily.temperature_2m_max[index]}°
            </p>

            <p className="text-xs text-gray-500">
              {daily.temperature_2m_min[index]}°
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}