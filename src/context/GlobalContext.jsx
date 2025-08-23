import { createContext, useContext } from "react";
import useCars from "../hooks/useCars";
import { useSelection } from "../hooks/useSelection";
import { useFavorites } from "../hooks/useFavorites";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const carData = useCars();
    const selection = useSelection();
    const favorites = useFavorites();


    return (
        <GlobalContext.Provider value={{ ...carData, ...selection, ...favorites }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useCar = () => useContext(GlobalContext);