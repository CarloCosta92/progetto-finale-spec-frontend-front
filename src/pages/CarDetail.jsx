import { useNavigate, useParams } from "react-router-dom";
import useCarSelected from "../hooks/useCarSelected";



const CarDetail = () => {
    const { id } = useParams();
    const { car, loading, error } = useCarSelected(id);
    const navigate = useNavigate();

    if (loading) return <div className="container py-4">Caricamento...</div>;
    if (error) return <div className="container py-4 text-danger">Errore: {error}</div>;
    if (!car) return <div className="container py-4">Nessun dettaglio disponibile</div>;


    return (
        <div className="container py-4 bg-light bg-opacity-50">
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
                            <p className="mb-1"><strong>Prezzo:</strong> € {car.price}</p>
                            <p className="mb-3"><strong>Colore:</strong> {car.colour}</p>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <ul className="list-unstyled">
                                        <li><strong>Marca:</strong> {car.brand}</li>
                                        <li><strong>Anno:</strong> {car.year}</li>
                                        <li><strong>Chilometraggio:</strong> {car.mileage}</li>
                                        <li><strong>Carburante:</strong> {car.fuelType}</li>
                                        <li><strong>Trasmissione:</strong> {car.transmission}</li>
                                        <li><strong>Potenza:</strong> {car.power}</li>
                                        <li><strong>Condizione:</strong> {car.condition}</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-unstyled">
                                        <li><strong>Modello:</strong> {car.model}</li>
                                        <li><strong>Porte:</strong> {car.doors}</li>
                                        <li><strong>Posti:</strong> {car.seats}</li>
                                        <li><strong>Emissioni:</strong> {car.emissions}</li>
                                        <li><strong>Consumo:</strong> {car.consumption}</li>
                                        <li><strong>Garanzia:</strong> {car.warranty}</li>
                                        <li><strong>Località:</strong> {car.location}</li>
                                    </ul>
                                </div>
                            </div>

                            <button
                                className="btn btn-primary mt-3 ms-3"
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
