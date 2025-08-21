import CarItem from "../components/CarItem";
import { useCar } from "../context/GlobalContext";

const Cars = () => {
    const { cars } = useCar();
    return (
        <>
            <h1>Pagina principale</h1>
            <ul className="list-group mt-4 ">
                {cars.map((car) => (
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