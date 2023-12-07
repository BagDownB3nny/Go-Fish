import React from "react";
import Timer from "../components/Timer";
import { StyleSheet, Text, View, Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// type RootStackParamList = {
//     Home: undefined;
//     Tank: undefined;
// };

// type HomePageNavigationProp = NativeStackNavigationProp<
//     RootStackParamList,
//     "Home"
// >;

const HomePage: React.FC = () => {
    return (
        <>
            <Text>Home Page</Text>
            <Timer />
        </>
    );
    // return (
    //     <Button
    //         title="Go to Jane's profile"
    //         onPress={() => navigation.navigate("Tank")}
    //     />
    // );
};

export default HomePage;
