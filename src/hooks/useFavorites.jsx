import { useState } from "react";

export const useFavorites = () => {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (car) =>
        setFavorites((prev) => {
            const exists = prev.find((fav) => fav.id === car.id);
            return exists
                ? prev.filter((fav) => fav.id !== car.id)
                : [...prev, { id: car.id, title: car.title, category: car.category }];
        });

    const isFavorite = (id) => favorites.some((fav) => fav.id === id);

    return { favorites, toggleFavorite, isFavorite };
};