import { useNavigate, useParams } from "react-router-dom";
import { useCar } from "../context/GlobalContext";
import useCarSelected from "../hooks/useCarSelected";
import CarForm from "../components/CarForm";

const EditCar = () => {
    const { id } = useParams();
    const { updateCar } = useCar();   // funzione CRUD dal GlobalContext
    const { car, loading, error } = useCarSelected(id);
    const navigate = useNavigate();

    if (loading) return <div className="container py-4">Caricamento...</div>;
    if (error) return <div className="container py-4 text-danger">{error}</div>;
    if (!car) return <div className="container py-4 text-danger">Auto non trovata</div>;

    const handleSubmit = async (updatedCar) => {
        await updateCar(id, updatedCar);
        navigate("/");   // ritorna alla lista dopo modifica
    };

    return (
        <div className="container my-4 text-white">
            <h2>Modifica auto</h2>
            <CarForm initialData={car} onSubmit={handleSubmit} />
        </div>
    );
};

export default EditCar;
