import { useEffect, useState } from "react";

const endpoint = "http://localhost:3001";

const useCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await fetch(`${endpoint}/cars`)
                if (!response.ok) {
                    throw new Error("Errore nel caricamento delle automobili")
                }
                const data = await response.json()
                setCars(data)
            }
            catch (err) {
                setError(err.message)
            }
            finally {
                setLoading(false)
            }
        }
        fetchCars()
    }, [])
    return { cars, loading, error };
}

export default useCars