export const getWeatherIcon = (code: number) => {
  if (code === 0) return "☀️";
  if (code <= 3) return "⛅";
  if (code <= 48) return "🌫";
  if (code <= 67) return "🌧";
  if (code <= 82) return "🌦";
  return "❄️";
};