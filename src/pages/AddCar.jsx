import { useNavigate } from "react-router-dom";
import { useCar } from "../context/GlobalContext";
import CarForm from "../components/CarForm";

const AddCar = () => {
    const { createCar } = useCar();
    const navigate = useNavigate();

    const handleSubmit = (carData) => {
        // Garantiamo tutti i tipi corretti
        const payload = {
            ...carData,
            year: Number(carData.year) || 0,
            doors: Number(carData.doors) || 0,
            seats: Number(carData.seats) || 0,

        };

        createCar(payload)
            .then(() => navigate("/"))
            .catch(err => console.error(err));
    };

    return (
        <div className="container my-4 text-white">
            <h2>Aggiungi nuova auto</h2>
            <CarForm onSubmit={handleSubmit} />
        </div>
    );
};

export default AddCar;
