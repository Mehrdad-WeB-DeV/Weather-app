import { useEffect, useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("favorites");
    if (data) setFavorites(JSON.parse(data));
  }, []);

  const addFavorite = (city: string) => {
    if (favorites.includes(city)) return;

    const updated = [...favorites, city];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const removeFavorite = (city: string) => {
    const updated = favorites.filter((c) => c !== city);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return { favorites, addFavorite, removeFavorite };
}