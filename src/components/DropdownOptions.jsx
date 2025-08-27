const DropdownOptions = ({ car, onEdit, onDelete }) => {
    return (
        <div className="dropdown ms-3">
            <button
                className="btn btn-sm btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Opzioni
            </button>
            <ul className="dropdown-menu">
                <li>
                    <button
                        className="dropdown-item"
                        onClick={() => onEdit(car)}
                    >
                        Modifica
                    </button>
                </li>
                <li>
                    <button
                        className="dropdown-item"
                        onClick={() => onDelete(car)}
                    >
                        Elimina
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default DropdownOptions;
