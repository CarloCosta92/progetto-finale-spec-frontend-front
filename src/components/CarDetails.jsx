const CarDetails = ({ car }) => {
    if (!car) return null;

    return (
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
    );
};

export default CarDetails;
