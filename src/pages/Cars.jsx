import { useMemo, useState } from "react";
import CarItem from "../components/CarItem";
import FilterBar from "../components/FilterBar";
import { useCar } from "../context/GlobalContext";

const Cars = () => {
    const { cars } = useCar();
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [sortBy, setSortBy] = useState("");

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
            .sort((a, b) =>
                sortBy ? a[sortBy].toString().localeCompare(b[sortBy].toString()) : 0
            );
    }, [cars, search, categoryFilter, sortBy]);



    return (
        <>
            <h1>Pagina principale</h1>
            <FilterBar
                search={search}
                setSearch={setSearch}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                sortBy={sortBy}
                setSortBy={setSortBy}
                categories={categories}
            />
            <ul className="list-group mt-4 ">
                {filteredCars.map((car) => (
                    <CarItem
                        key={car.id}
                        car={car}
                    />
                ))}
            </ul>
        </>

    )
}

export default Cars