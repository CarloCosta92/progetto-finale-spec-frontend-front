import { useCar } from "../context/GlobalContext";

const Cars = () => {
    const { cars } = useCar();
    return (
        <>
            <h1>Pagina principale</h1>
            <ul className="list-group mt-4 ">
                {cars.map((car) => (
                    <li key={car.id}>{car.title}</li>
                ))}
            </ul>
        </>

    )
}

export default Cars