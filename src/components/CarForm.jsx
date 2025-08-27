import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CarForm = ({ initialData = {}, onSubmit }) => {
    const navigate = useNavigate();
    const [car, setCar] = useState({
        title: initialData.title || "",
        brand: initialData.brand || "",
        model: initialData.model || "",
        category: initialData.category || "",
        price: initialData.price || "",
        color: initialData.color || "",
        img: initialData.img || "",
        year: initialData.year || 0,
        mileage: initialData.mileage || "",
        fuelType: initialData.fuelType || "",
        transmission: initialData.transmission || "",
        power: initialData.power || "",
        doors: initialData.doors || 0,
        seats: initialData.seats || 0,
        emissions: initialData.emissions || "",
        consumption: initialData.consumption || "",
        warranty: initialData.warranty || "",
        location: initialData.location || "",
        condition: initialData.condition || "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCar(prev => ({
            ...prev,
            [name]: value.trim()
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const contenitoreErrori = {};

        // Campi obbligatori
        if (!car.title) contenitoreErrori.title = "Titolo obbligatorio";
        if (!car.brand) contenitoreErrori.brand = "Marca obbligatoria";
        if (!car.model) contenitoreErrori.model = "Modello obbligatorio";
        if (!car.price) contenitoreErrori.price = "Prezzo obbligatorio";

        // Validazione numeri
        if (car.year && (Number(car.year) < 1900 || Number(car.year) > 2025)) contenitoreErrori.year = "Anno deve essere tra 1900 e 2025";
        if (car.doors && Number(car.doors) < 0) contenitoreErrori.doors = "Numero porte non valido";
        if (car.seats && Number(car.seats) < 0) contenitoreErrori.seats = "Numero posti non valido";

        // Mostra errori globali se presenti
        if (JSON.stringify(contenitoreErrori) !== "{}") {
            // Unisci tutti i messaggi in un’unica stringa per alert globale
            const messaggi = Object.values(contenitoreErrori).join(". ");
            setError(messaggi);
            return;
        }

        setError("");
        onSubmit({ ...car, img: car.img || "" });
    };

    return (
        <form onSubmit={handleSubmit} className="container my-4 py-4 bg-light bg-opacity-50 mb-4 text-dark">
            {error && <div className="alert alert-danger">{error}</div>}

            {/* URL immagine */}
            <div className="row mb-3">
                <div className="col-md-4">
                    <label className="form-label">URL immagine</label>
                    <input
                        type="text"
                        className="form-control"
                        name="img"
                        value={car.img}
                        onChange={handleChange}
                        placeholder="Inserisci URL immagine"
                    />
                </div>
            </div>

            {/* Prima riga */}
            <div className="row mb-3">
                <div className="col-md-4">
                    <label className="form-label">Titolo</label>
                    <input type="text" className="form-control" name="title" value={car.title} onChange={handleChange} placeholder="Inserisci titolo auto" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Marca</label>
                    <input type="text" className="form-control" name="brand" value={car.brand} onChange={handleChange} placeholder="Inserisci marca" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Modello</label>
                    <input type="text" className="form-control" name="model" value={car.model} onChange={handleChange} placeholder="Inserisci modello" />
                </div>
            </div>

            {/* Seconda riga */}
            <div className="row mb-3">
                <div className="col-md-4">
                    <label className="form-label">Categoria</label>
                    <input type="text" className="form-control" name="category" value={car.category} onChange={handleChange} placeholder="es. SUV, Berlina" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Prezzo (€)</label>
                    <input type="text" className="form-control" name="price" value={car.price} onChange={handleChange} placeholder="Inserisci prezzo" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Colore</label>
                    <input type="text" className="form-control" name="color" value={car.color} onChange={handleChange} placeholder="es. Rosso, Nero" />
                </div>
            </div>

            {/* Terza riga */}
            <div className="row mb-3">
                <div className="col-md-4">
                    <label className="form-label">Anno</label>
                    <input type="number" className="form-control" name="year" value={car.year} onChange={handleChange} placeholder="Anno di produzione" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Chilometraggio</label>
                    <input type="text" className="form-control" name="mileage" value={car.mileage} onChange={handleChange} placeholder="Inserisci km percorsi" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Tipo carburante</label>
                    <input type="text" className="form-control" name="fuelType" value={car.fuelType} onChange={handleChange} placeholder="Benzina, Diesel, Elettrica" />
                </div>
            </div>

            {/* Quarta riga */}
            <div className="row mb-3">
                <div className="col-md-4">
                    <label className="form-label">Trasmissione</label>
                    <input type="text" className="form-control" name="transmission" value={car.transmission} onChange={handleChange} placeholder="Manuale/Automatica" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Potenza</label>
                    <input type="text" className="form-control" name="power" value={car.power} onChange={handleChange} placeholder="es. 120 CV" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Porte</label>
                    <input type="number" className="form-control" name="doors" value={car.doors} onChange={handleChange} placeholder="Numero porte" />
                </div>
            </div>

            {/* Quinta riga */}
            <div className="row mb-3">
                <div className="col-md-4">
                    <label className="form-label">Posti</label>
                    <input type="number" className="form-control" name="seats" value={car.seats} onChange={handleChange} placeholder="Numero posti" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Emissioni</label>
                    <input type="text" className="form-control" name="emissions" value={car.emissions} onChange={handleChange} placeholder="Euro 6" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Consumo</label>
                    <input type="text" className="form-control" name="consumption" value={car.consumption} onChange={handleChange} placeholder="L/100km" />
                </div>
            </div>

            {/* Sesta riga */}
            <div className="row mb-3">
                <div className="col-md-4">
                    <label className="form-label">Garanzia</label>
                    <input type="text" className="form-control" name="warranty" value={car.warranty} onChange={handleChange} placeholder="es. 12 mesi" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Luogo</label>
                    <input type="text" className="form-control" name="location" value={car.location} onChange={handleChange} placeholder="Città/Provincia" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Condizione</label>
                    <input type="text" className="form-control" name="condition" value={car.condition} onChange={handleChange} placeholder="Nuovo/Usato" />
                </div>
            </div>

            <div className="d-flex justify-content-between mt-3">
                <button type="submit" className="btn btn-primary">
                    Salva
                </button>

                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => navigate("/")}
                >
                    Torna indietro
                </button>
            </div>
        </form>
    );
};

export default CarForm;
