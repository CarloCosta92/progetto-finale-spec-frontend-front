import { createContext, useContext } from "react";
import useCars from "../hooks/useCars";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const carData = useCars();


    return (
        <GlobalContext.Provider value={{ ...carData }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useCar = () => useContext(GlobalContext);