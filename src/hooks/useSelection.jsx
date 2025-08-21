import { useState } from "react";

export const useSelection = () => {
    const [selectedIds, setSelectedIds] = useState([]);

    const toggleSelectCar = (id) =>
        setSelectedIds((car) =>
            car.includes(id) ? car.filter((i) => i !== id) : [...car, id]
        );

    const isCarSelected = (id) => selectedIds.includes(id);

    return { selectedIds, toggleSelectCar, isCarSelected };
};