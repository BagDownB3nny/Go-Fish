import React, { useEffect, useState } from "react";
import { Button, Text } from "react-native";
import { api } from "../lib/axios";
import FishTank from "../components/FishTank";

const TankPage: React.FC = () => {
    const [fishes, setFishes] = useState([]);

    useEffect(() => {
        console.log("Fetching Fishes");
        api.get("/fish/my-fishes?userId=65735d38ff4fa64cbdf98324")
            .then((res) => {
                setFishes(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <Text>Tank Page</Text>
            <FishTank fishList={fishes} />
        </>
    );
};

export default TankPage;
