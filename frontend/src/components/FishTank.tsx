import React, { useContext } from "react";
import { FlatList, Text, View } from "react-native";
import { FishSpecies } from "../types/fish.types";
import { fishImages } from "../utilities/fishImages";
import { Image } from "expo-image";
import { FishesContext } from "../context/fishesContext";

type FishCaughtItem = {
    name: string;
    count: number;
    description: string;
};

const FishTank: React.FC = () => {
    const { fishes } = useContext(FishesContext);

    const renderFishItem = ({ item }: { item: FishCaughtItem }) => {
        const fishSource = fishImages[item.name.replace(" ", "")];
        return (
            <View>
                <Image style={{ width: 40, height: 40 }} source={fishSource} />
                <Text>Name: {item.name}</Text>
                <Text>Description: {item.description}</Text>
                <Text>Count: {item.count}</Text>
            </View>
        );
    };

    const fishArray = Object.entries(fishes).map(([key, value]) => ({
        name: key,
        count: value.count,
        description: value.description,
    }));

    return (
        <FlatList
            data={fishArray}
            renderItem={renderFishItem}
            keyExtractor={(item) => item.name}
        />
    );
};

export default FishTank;
