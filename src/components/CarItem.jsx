import { useCar } from "../context/GlobalContext";

const CarItem = ({ car, isSelected, onToggle, onClick }) => {
    const { isFavorite, toggleFavorite } = useCar();
    const favorite = isFavorite(car.id);
    return (
        <li className="list-group-item d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center flex-grow-1">
                <input
                    type="checkbox"
                    className="form-check-input me-2"
                    checked={isSelected}
                    onChange={() => onToggle(car.id)}
                />
                <span onClick={onClick}>
                    {car.title}
                </span>
            </div>
            <span className="badge bg-primary ms-3">{car.category}</span>
            <button
                onClick={() => toggleFavorite(car)}
                className={`btn btn-sm ms-3 ${favorite ? "btn-danger" : "btn-outline-danger"}`}
                title={favorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
            >
                {favorite ? "❤️" : "🤍"}
            </button>
        </li>
    )
}

export default CarItem