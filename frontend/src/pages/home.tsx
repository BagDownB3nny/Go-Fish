import React, { useState, useContext, useEffect } from "react";
import { Text } from "react-native";
import Timer from "../components/Timer";
import BaitSelector from "../components/BaitSelector";
import { UserCaughtFishes } from "../types/fish.types";
import { FishesContext } from "../context/fishesContext";

const HomePage: React.FC = () => {
    const { fishes } = useContext(FishesContext);
    const [bait, setBait] = useState<string>("None");

    return (
        <>
            <Text>Home Page</Text>
            <Timer bait={bait} />
            <BaitSelector options={fishes} bait={bait} setBait={setBait} />
        </>
    );
};

export default HomePage;
