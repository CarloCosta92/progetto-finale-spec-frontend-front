const CarItem = ({ car, isSelected, onToggle, onClick }) => {
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
        </li>
    )
}

export default CarItem