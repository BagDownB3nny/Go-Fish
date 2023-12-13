import React, { useContext } from "react";
import { Button, Text } from "react-native";
import FishTank from "../components/FishTank";
import { AuthContext } from "../context/authContext";
import { api } from "../lib/axios";

const TankPage: React.FC = () => {
    const { currentUser } = useContext(AuthContext);

    const fetchAndSetFishes = () => {
        const fetchFishes = async () => {
            api.get(`fish/my-fishes?userId=${currentUser.userId}`).then(
                (res: { data: any }) => {
                    console.log(res.data);
                }
            );
        };
        fetchFishes();
    };

    return (
        <>
            <Text>Tank Page</Text>
            <FishTank />
            <Button title="Get Fishes" onPress={fetchAndSetFishes} />
        </>
    );
};

export default TankPage;
