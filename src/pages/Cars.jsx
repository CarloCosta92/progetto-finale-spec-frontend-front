import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import CarItem from "../components/CarItem";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";
import CompareModal from "../components/CompareModal";
import { useCar } from "../context/GlobalContext";

function debounce(fn, delay = 1000) {
    let timeoutId;
    return (...args) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

const Cars = () => {
    const { cars, loading, error, toggleSelectCar, selectedIds } = useCar();
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);

    const handleSearch = useMemo(
        () =>
            debounce((value) => {
                setSearch(value);
            }, 1000),
        []
    );

    const categories = useMemo(() => {
        return cars.reduce((acc, car) => {
            if (!acc.includes(car.category)) acc.push(car.category);
            return acc;
        }, []);
    }, [cars]);

    const filteredCars = useMemo(() => {
        return cars
            .filter(car =>
                search.trim() ? car.title.toLowerCase().includes(search.toLowerCase()) : true
            )
            .filter(car =>
                categoryFilter ? car.category === categoryFilter : true
            )
            .sort((a, b) => {
                if (!sortBy) return 0;
                const value = a[sortBy].toString().localeCompare(b[sortBy].toString());
                return sortOrder === "asc" ? value : -value;
            });
    }, [cars, search, categoryFilter, sortBy, sortOrder]);

    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredCars.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [search, categoryFilter]);

    if (loading) return <div className="container py-4">Caricamento...</div>;
    if (error) return <div className="container py-4 text-danger">Errore: {error}</div>;

    return (
        <div className="container my-4">
            <div className="text-center bg-light bg-opacity-50 mb-4">
                <h1 className="text-danger">Le nostre automobili</h1>
                <h3>Scopri le nostre migliori occasioni</h3>
                <p>Seleziona due o più auto contemporaneamente</p>
            </div>

            {/* FilterBar e pulsante Nuova Auto */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <FilterBar
                    search={inputValue}
                    setSearch={(val) => { setInputValue(val); handleSearch(val); }}
                    categoryFilter={categoryFilter}
                    setCategoryFilter={setCategoryFilter}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    categories={categories}
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder}
                />
                <button
                    className="btn btn-success ms-3"
                    onClick={() => navigate("/cars/new")}
                >
                    Nuova Auto
                </button>
            </div>

            {/* Lista auto */}
            <ul className="list-group mt-4 bg-light bg-opacity-50">
                {currentItems.map((car) => (
                    <CarItem
                        key={car.id}
                        car={car}
                        isSelected={selectedIds.includes(car.id)}
                        onToggle={() => toggleSelectCar(car.id)}
                        onClick={() => navigate(`/cars/${car.id}`)}
                        onEdit={() => navigate(`/cars/${car.id}/edit`)}
                    />
                ))}

                {currentItems.length === 0 && (
                    <li className="list-group-item text-center text-muted">
                        Nessuna auto trovata
                    </li>
                )}
            </ul>

            {/* Paginazione e pulsante Confronta */}
            <div className="d-flex justify-content-between align-items-center mt-3">
                {filteredCars.length !== 0 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                )}

                <button
                    className="btn btn-primary"
                    onClick={() => setShowModal(true)}
                >
                    Confronta ({selectedIds.length})
                </button>
            </div>

            <CompareModal show={showModal} onClose={() => setShowModal(false)} />
        </div>
    );
};

export default Cars;
