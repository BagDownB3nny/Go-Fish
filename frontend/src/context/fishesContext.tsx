import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { FishSpecies } from "../types/fish.types";
import { AuthContext } from "./authContext";

type FishesContextType = {
    fishes: Map<FishSpecies, number>;
    setFishes: React.Dispatch<React.SetStateAction<Map<FishSpecies, number>>>;
};

export const FishesContext = createContext<FishesContextType>({
    fishes: new Map(),
    setFishes: () => {},
});

export const FishesProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [fishes, setFishes] = useState<Map<FishSpecies, number>>(new Map());

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchFishes = async () => {
            console.log("Fetching fishes useEffect");
            api.get(`fish/my-fishes?userId=${currentUser.userId}`).then(
                (res: { data: any }) => {
                    console.log(res.data);
                }
            );
        };
        fetchFishes();
    }, [currentUser]);

    return (
        <FishesContext.Provider value={{ fishes, setFishes }}>
            {children}
        </FishesContext.Provider>
    );
};
