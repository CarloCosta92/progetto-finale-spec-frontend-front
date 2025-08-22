import { useState, useEffect } from "react";

const endpoint = "http://localhost:3001";

export const useCarsSelected = (ids) => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!ids || ids.length === 0) {
            setCars([]);
            return;
        }

        const fetchCars = async () => {
            try {
                setLoading(true);
                const details = await Promise.all(
                    ids.map(async (id) => {
                        const res = await fetch(`${endpoint}/cars/${id}`);
                        if (!res.ok) throw new Error("Errore caricamento auto");
                        const data = await res.json();
                        return data.car || data;
                    })
                );
                setCars(details);
            } catch (err) {
                setError(err.message);
                setCars([]);
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, [JSON.stringify(ids)]);

    return { cars, loading, error };
};
