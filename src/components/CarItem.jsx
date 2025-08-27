import { useCar } from "../context/GlobalContext";
import DropdownOptions from "./DropdownOptions";

const CarItem = ({ car, isSelected, onToggle, onClick, onEdit }) => {
    const { toggleFavorite, isFavorite, deleteCar } = useCar();
    const favorite = isFavorite(car.id);

    const handleDelete = () => {
        if (window.confirm(`Sei sicuro di eliminare "${car.title}"?`)) {
            deleteCar(car.id);
        }
    };

    return (
        <li className="list-group-item d-flex align-items-center justify-content-between bg-light bg-opacity-50">
            <div className="d-flex align-items-center flex-grow-1">
                <input
                    type="checkbox"
                    className="form-check-input me-2"
                    checked={isSelected}
                    onChange={() => onToggle(car.id)}
                />
                <span>{car.title}</span>
            </div>

            <span className="badge bg-primary ms-3">{car.category}</span>

            <button
                onClick={onClick}
                className="btn btn-sm btn-outline-success ms-3"
                title="Visualizza dettagli"
            >
                Dettagli auto
            </button>

            <button
                onClick={() => toggleFavorite(car)}
                className={`btn btn-sm ms-3 ${favorite ? "btn-danger" : "btn-outline-danger"}`}
                title={favorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
            >
                {favorite ? "❤️" : "🤍"}
            </button>

            <DropdownOptions car={car} onEdit={onEdit} onDelete={handleDelete} />

        </li>
    );
};

export default CarItem;
