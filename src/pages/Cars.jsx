import { useEffect, useMemo, useState } from "react";
import CarItem from "../components/CarItem";
import FilterBar from "../components/FilterBar";
import { useCar } from "../context/GlobalContext";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";
import CompareModal from "../components/CompareModal";

function debounce(fn, delay = 300) {
    let timeoutId;
    return (...args) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

const Cars = () => {
    const { cars, loading, error, toggleSelectCar, selectedIds } = useCar();
    const [search, setSearch] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);


    const handleSearch = useMemo(
        () =>
            debounce((value) => {
                setSearch(value);
            }, 1000),
        []
    );


    //scorre l'array e aggiunge all'accumulatore le categorie che non sono ancora state aggiunte,non lo mettessi,avrei tutte le categorie duplicate per la quantità di auto esistenti
    //utilizzo useMemo per non ripetere la funzione

    const categories = useMemo(() => {
        return cars.reduce((acc, car) => {
            if (!acc.includes(car.category)) acc.push(car.category);
            return acc;
        }, []);
    }, [cars]);


    //funzione per cercare,filtrare e ordinare le auto
    //useMemo per gestire il re-render solo al cambiamento delle cose
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
            })
    }, [cars, search, categoryFilter, sortBy, sortOrder]);

    //gestione delle pagine,ho settato 10 elementi per pagina
    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredCars.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [search]);


    if (loading) return <div className="container py-4">Caricamento...</div>;
    if (error) return <div className="container py-4 text-danger">Errore: {error}</div>;




    return (
        <>
            <h1>Pagina principale</h1>
            <FilterBar
                search={inputValue}
                setSearch={(val) => {
                    setInputValue(val);
                    handleSearch(val);
                }}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                sortBy={sortBy}
                setSortBy={setSortBy}
                categories={categories}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
            />
            <ul className="list-group mt-4 ">
                {currentItems.map((car) => (
                    <CarItem
                        key={car.id}
                        car={car}
                        isSelected={selectedIds.includes(car.id)}
                        onToggle={() => toggleSelectCar(car.id)}
                        onClick={() => navigate(`/cars/${car.id}`)}
                    />
                ))}
            </ul>
            <div className="d-flex justify-content-between">
                {filteredCars.length !== 0 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}

                <button
                    className="btn btn-primary my-3 "
                    disabled={selectedIds.length < 2}
                    onClick={() => setShowModal(true)}
                >
                    Confronta ({selectedIds.length})
                </button>
            </div>

            <CompareModal show={showModal} onClose={() => setShowModal(false)} />
        </>

    )
}

export default Cars