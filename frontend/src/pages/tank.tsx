import React, { useEffect, useState } from "react";
import { Button, Text } from "react-native";
import { api } from "../lib/axios";
import FishTank from "../components/FishTank";
import { getFishes } from "../features/fishing/get-fishes";
import { Fish } from "../types/fish.types";

const TankPage: React.FC = () => {
    const [fishes, setFishes] = useState<Fish[]>([]);

    const fetchAndSetFishes = async () => {
        getFishes("65735d38ff4fa64cbdf98324").then((fishList) =>
            setFishes(fishList)
        );
    };

    useEffect(() => {
        fetchAndSetFishes();
    }, []);

    return (
        <>
            <Text>Tank Page</Text>
            <FishTank fishList={fishes} />
            <Button title="Get Fishes" onPress={fetchAndSetFishes} />
        </>
    );
};

export default TankPage;
