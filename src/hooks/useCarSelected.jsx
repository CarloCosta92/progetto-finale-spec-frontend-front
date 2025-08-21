import { useState, useEffect } from "react";
const endpoint = "http://localhost:3001";

const useCarSelected = (id) => {
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        const fetchCar = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${endpoint}/cars/${id}`);
                if (!response.ok) {
                    throw new Error("Errore nel caricamento dettagli dell'automobile");
                }
                const data = await response.json();
                // console.log(data)
                setCar(data.car);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCar();
    }, [id]);

    return { car, loading, error };
};

export default useCarSelected