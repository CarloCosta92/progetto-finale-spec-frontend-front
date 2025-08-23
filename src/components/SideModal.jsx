import { useCar } from "../context/GlobalContext";
import { useCarsSelected } from "../hooks/useCarsSelected";

const SideModal = ({ show, handleClose }) => {
    const { favorites, toggleFavorite } = useCar();

    //Prendi solo gli id dei preferiti quando il modale è aperto
    const favoriteIds = show ? favorites.map(f => f.id) : [];

    //hook per ottenere i dettagli delle auto
    const { cars: detailedFavorites, loading } = useCarsSelected(favoriteIds, show);

    if (!show) return null;

    return (
        <>
            <div
                className="offcanvas offcanvas-end show bg-light bg-opacity-50"
                tabIndex="-1"
                style={{ visibility: "visible" }}
            >
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title">Preferiti</h5>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        onClick={handleClose}
                    ></button>
                </div>
                <div className="offcanvas-body">
                    {loading ? (
                        <p className="text-center mt-3">Caricamento preferiti...</p>
                    ) : detailedFavorites.length === 0 ? (
                        <p className="text-muted text-center mt-3">Nessun preferito aggiunto.</p>
                    ) : (
                        <div className="d-flex flex-column gap-3">
                            {detailedFavorites.map((car) => (
                                <div key={car.id} className="card shadow-sm border-0">
                                    {car.img && (
                                        <img
                                            src={car.img}
                                            className="card-img-top"
                                            alt={car.title}
                                            style={{ height: "150px", objectFit: "cover" }}
                                        />
                                    )}
                                    <div className="card-body p-3">
                                        <h6 className="card-title mb-1">{car.title}</h6>
                                        <p className="text-primary fw-bold mb-2">€ {car.price}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="badge bg-secondary">{car.category}</span>
                                            <button
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={() => toggleFavorite(car)}
                                            >
                                                <i className="bi bi-trash"></i> Rimuovi
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="offcanvas-backdrop fade show" onClick={handleClose}></div>
        </>
    );
};

export default SideModal;
