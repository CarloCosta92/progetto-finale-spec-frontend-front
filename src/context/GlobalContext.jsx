import { createContext, useContext } from "react";
import useCars from "../hooks/useCars";
import { useSelection } from "../hooks/useSelection";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const carData = useCars();
    const selection = useSelection();


    return (
        <GlobalContext.Provider value={{ ...carData, ...selection }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useCar = () => useContext(GlobalContext);