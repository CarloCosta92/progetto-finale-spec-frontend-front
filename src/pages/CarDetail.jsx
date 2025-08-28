import { useNavigate, useParams } from "react-router-dom";
import useCarSelected from "../hooks/useCarSelected";
import CarDetails from "../components/CarDetails";
import { useCar } from "../context/GlobalContext";



const CarDetail = () => {
    const { id } = useParams();
    const { car, loading, error } = useCarSelected(id);
    const navigate = useNavigate();
    const { toggleSelectCar, isCarSelected, toggleFavorite, isFavorite } = useCar();


    if (loading) return <div className="container py-4">Caricamento...</div>;
    if (error) return <div className="container py-4 text-danger">Errore: {error}</div>;
    if (!car) return <div className="container py-4">Nessun dettaglio disponibile</div>;

    const favorite = isFavorite(car.id)

    return (
        <div className="container p-0 bg-light bg-opacity-50">
            <div className="card shadow-sm bg-light bg-opacity-50">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={car.img}
                            alt={car.title}
                            className="img-fluid rounded-start img-detail"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{car.title}</h3>
                            <p className="text-muted mb-2">{car.category}</p>
                            <p className="mb-1"><strong>Prezzo:</strong>  {car.price}</p>
                            <p className="mb-3"><strong>Colore:</strong> {car.color}</p>

                            <CarDetails car={car} />

                            <button
                                className={`btn ${isCarSelected(car.id) ? "btn-danger" : "btn-success"} mt-3 me-2`}
                                onClick={() => toggleSelectCar(car.id)}
                            >
                                {isCarSelected(car.id) ? "Rimuovi dal confronto" : "Aggiungi al confronto"}
                            </button>
                            <button
                                className={`btn ${favorite ? "btn-danger" : "btn-outline-danger"} mt-3`}
                                onClick={() => toggleFavorite(car)}
                            >
                                {favorite ? "Rimuovi dai preferiti ❤️" : "Aggiungi ai preferiti 🤍"}
                            </button>


                            <button
                                className="btn btn-secondary mt-3 ms-3"
                                onClick={() => navigate("/")}
                            >
                                Torna indietro
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetail;
