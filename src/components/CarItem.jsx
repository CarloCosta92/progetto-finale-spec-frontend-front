const CarItem = ({ car }) => {
    return (
        <li className="list-group-item d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center flex-grow-1">
                <span>{car.title}</span>
            </div>
            <span className="badge bg-primary ms-3">{car.category}</span>
        </li>
    )
}

export default CarItem