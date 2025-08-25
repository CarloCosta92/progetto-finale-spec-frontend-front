import { useState, useEffect } from "react";

export const useFavorites = () => {
    // Stato inizializzato direttamente dal localStorage
    // Così al primo render React prende subito i dati salvati,
    // evitando che la lista appaia vuota dopo il refresh.
    const [favorites, setFavorites] = useState(() => {
        const stored = localStorage.getItem("favorites"); // leggo la chiave "favorites"
        return stored ? JSON.parse(stored) : []; // se esiste la parso, altrimenti array vuoto
    });

    // Ogni volta che favorites cambia aggiorno localStorage
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
        // console.log("Salvo in localStorage:", favorites);
    }, [favorites]);

    // Aggiunge o rimuove un preferito
    const toggleFavorite = (car) =>
        setFavorites((prev) => {
            const exists = prev.find((fav) => fav.id === car.id); // cerco se già presente
            return exists
                ? prev.filter((fav) => fav.id !== car.id) // se c’è  lo tolgo
                : [
                    ...prev,
                    { id: car.id, title: car.title, category: car.category }, // se non c’è → lo aggiungo
                ];
        });

    //  Controllo per la festione dei favoriti
    const isFavorite = (id) => favorites.some((fav) => fav.id === id);

    return { favorites, toggleFavorite, isFavorite };
};
