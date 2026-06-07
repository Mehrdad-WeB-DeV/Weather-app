export default function WeatherSkeleton() {
  return (
    <div className="max-w-md mx-auto p-6 rounded-3xl bg-white/20 dark:bg-black/20 backdrop-blur-md animate-pulse border border-white/20">
      <div className="h-6 w-32 bg-gray-300 dark:bg-gray-700 rounded mb-6 mx-auto"></div>

      <div className="h-20 w-20 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-6"></div>

      <div className="h-10 w-40 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-4"></div>

      <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded mx-auto"></div>
    </div>
  );
}
