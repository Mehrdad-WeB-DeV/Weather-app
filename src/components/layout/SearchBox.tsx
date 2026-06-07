import { useState } from "react";

type Props = {
  onSearch: (city: string) => void;
  loading: boolean;
};

export default function SearchBox({ onSearch, loading }: Props) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!city.trim()) return;
    onSearch(city);
  };

  return (
    <div className="flex items-center gap-2 w-full max-w-md mx-auto">
      
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="اسم شهر رو بنویس..."
        className="flex-1 px-4 py-3 rounded-xl border bg-white dark:bg-gray-800 text-black dark:text-white outline-none"
      />

      <button
        onClick={handleSearch}
        disabled={loading}
        className="px-5 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? "..." : "جستجو"}
      </button>
    </div>
  );
}