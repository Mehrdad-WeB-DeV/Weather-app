import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useTheme } from "./components/hook/useTheme";
import { useFavorites } from "./components/hook/useFavorites";

import { getWeather, searchCity } from "./components/services/weather";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SearchBox from "./components/layout/SearchBox";
import Forecast from "./components/layout/Forecast";
import WeatherCard from "./components/layout/WeatherCard";
import TemperatureChart from "./components/layout/TemperatureChart";

export default function App() {
  const { dark, setDark } = useTheme();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      const data = await getWeather(lat, lon);

      setWeather({
        city: "موقعیت فعلی شما",
        ...data,
      });
    });
  }, []);


  const handleSearch = async (city: string) => {
    try {
      setLoading(true);

      const geo = await searchCity(city);
      const location = geo.results?.[0];

      if (!location) {
        alert("شهر پیدا نشد 😕");
        return;
      }

      const data = await getWeather(location.latitude, location.longitude);

      setWeather({
        city: location.name,
        ...data,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-300 dark:bg-gray-900 text-black dark:text-white">
      <Header dark={dark} setDark={setDark} />

      <main className="flex-1 p-6 space-y-6">
        <SearchBox onSearch={handleSearch} loading={loading} />

        {/* ⏳ Loading */}
        {loading && (
          <div className="text-center animate-pulse text-gray-500">
            در حال گرفتن اطلاعات آب‌وهوا...
          </div>
        )}

        {/* 🌤 Weather Section */}
        <AnimatePresence mode="wait">
          {weather && (
            <motion.div
              key={weather.city}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <WeatherCard
                    city={weather.city}
                    temp={weather.current.temperature_2m}
                    wind={weather.current.wind_speed_10m}
                    code={weather.current.weathercode}
                  />
                </motion.div>

                
                <div className="text-center">
                  <button
                    onClick={() => addFavorite(weather.city)}
                    className="px-4 py-2 rounded-xl bg-yellow-400 text-black"
                  >
                    ⭐ ذخیره شهر
                  </button>
                </div>

         
                <motion.div
                  key={weather.city}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Forecast daily={weather.daily} />
                </motion.div>

                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <TemperatureChart daily={weather.daily} />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        
        {favorites.length > 0 && (
          <div className="max-w-md mx-auto mt-6">
            <h3 className="mb-2 font-bold">⭐ شهرهای ذخیره‌شده</h3>

            <div className="flex flex-wrap gap-2">
              {favorites.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700"
                >
                 
                  <button onClick={() => handleSearch(city)}>{city}</button>

                  
                  <button
                    onClick={() => removeFavorite(city)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
