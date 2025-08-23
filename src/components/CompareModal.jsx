import { useCar } from "../context/GlobalContext";
import { useCarsSelected } from "../hooks/useCarsSelected";
import CarDetails from "./CarDetails";

const CompareModal = ({ show, onClose }) => {
    const { selectedIds } = useCar();
    // quando show = true(modale aperto) fa il fetch degli id,quando false array vuoto 
    const { cars: selectedCars, loading } = useCarsSelected(show ? selectedIds : []);

    //gestione del modale in base alla quantità di auto
    const counterCar = (count) => {
        if (count === 1) return "col-12";
        if (count === 2) return "col-12 col-md-6";
        if (count === 3) return "col-12 col-md-6 col-lg-4";
        if (count === 4) return "col-12 col-md-6 col-lg-3";
        if (count > 4) return "col-12 col-md-6 col-lg-3";
        return "col-12";
    };

    if (!show) return null;

    return (
        <>
            <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-xl modal-dialog-centered" role="document">
                    <div className="modal-content shadow-sm">
                        <div className="modal-header">
                            <h5 className="modal-title">Confronto Auto</h5>
                            <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                onClick={onClose}
                            />
                        </div>
                        <div className="modal-body">
                            {loading ? (
                                <p>Caricamento auto...</p>
                            ) : selectedCars.length === 0 ? (
                                <p>Nessuna auto selezionata.</p>
                            ) : (
                                <div className="row g-3">
                                    {selectedCars.map((car) => (
                                        <div className={counterCar(selectedCars.length)} key={car.id}>
                                            <div className="card h-100 shadow-sm">
                                                <img
                                                    src={car.img}
                                                    alt={car.title}
                                                    className="card-img-top"
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title">{car.title}</h5>
                                                    <p className="text-muted">{car.category}</p>
                                                    <p>
                                                        <strong>Prezzo:</strong> € {car.price}
                                                    </p>
                                                    <p>
                                                        <strong>Colore:</strong> {car.color}
                                                    </p>

                                                    <CarDetails car={car} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal-backdrop fade show" onClick={onClose}></div>
        </>
    );
};

export default CompareModal;
