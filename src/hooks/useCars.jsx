import { useEffect, useState } from "react";

const endpoint = "http://localhost:3001";

const useCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // FETCH lista auto
    const fetchCars = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${endpoint}/cars`);
            if (!response.ok) throw new Error("Errore nel caricamento delle automobili");
            const data = await response.json();
            setCars(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // chiama fetchCars al mount
    useEffect(() => {
        fetchCars();
    }, []);

    // CREATE
    const createCar = async (newCar) => {
        try {
            const res = await fetch(`${endpoint}/cars`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newCar),
            });
            if (!res.ok) throw new Error("Errore nella creazione dell'auto");
            await res.json();
            // rifai il fetch completo dopo la creazione cosi non devo refreshare
            await fetchCars();
        } catch (err) {
            setError(err.message);
        }
    };

    //UPDATE
    const updateCar = async (id, updatedCar) => {
        try {
            const res = await fetch(`${endpoint}/cars/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedCar),
            });
            if (!res.ok) throw new Error("Errore nell'aggiornamento dell'auto");
            const savedCar = await res.json();
            setCars((prev) => prev.map((c) => (c.id === id ? savedCar : c)));
            return savedCar;
        } catch (err) {
            setError(err.message);
        }
    };

    //DELETE
    const deleteCar = async (id) => {
        try {
            const res = await fetch(`${endpoint}/cars/${id}`, {
                method: "DELETE",
            });
            if (!res.ok) throw new Error("Errore nell'eliminazione dell'auto");
            setCars((prev) => prev.filter((c) => c.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    return { cars, loading, error, createCar, updateCar, deleteCar };
};

export default useCars;
