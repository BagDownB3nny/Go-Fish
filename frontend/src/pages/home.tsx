import React, { useContext, useEffect } from "react";
import { Text } from "react-native";
import Timer from "../components/Timer";
import BaitSelector from "../components/BaitSelector";
import { UserCaughtFishes } from "../types/fish.types";
import { FishesContext } from "../context/fishesContext";

const HomePage: React.FC = () => {
    const { fishes } = useContext(FishesContext);

    useEffect(() => {
        console.log("Fishes useEffect");
        console.log(fishes);
    }, [fishes]);

    return (
        <>
            <Text>Home Page</Text>
            <Timer />
            <BaitSelector options={fishes} />
        </>
    );
};

export default HomePage;
