import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { FishSpecies, UserCaughtFishes } from "../types/fish.types";
import { AuthContext } from "./authContext";

type FishesContextType = {
    fishes: UserCaughtFishes;
    setFishes: React.Dispatch<React.SetStateAction<UserCaughtFishes>>;
};

export const FishesContext = createContext<FishesContextType>({
    fishes: {},
    setFishes: () => {},
});

export const FishesProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [fishes, setFishes] = useState<UserCaughtFishes>({});

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchFishes = async () => {
            api.get(`fish/my-fishes?userId=${currentUser.userId}`).then(
                (res: { data: any }) => {
                    setFishes(res.data.fishes);
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
