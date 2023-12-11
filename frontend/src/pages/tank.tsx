import React, { useEffect, useState, useContext } from "react";
import { Button, Text } from "react-native";
import { api } from "../lib/axios";
import FishTank from "../components/FishTank";
import { getFishes } from "../features/fishing/get-fishes";
import { Fish } from "../types/fish.types";
import { AuthContext } from "../context/authContext";

const TankPage: React.FC = () => {
    const { currentUser } = useContext(AuthContext);
    const [fishes, setFishes] = useState<Fish[]>([]);

    const fetchAndSetFishes = async () => {
        getFishes(currentUser.userId!).then((fishList) => setFishes(fishList));
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
