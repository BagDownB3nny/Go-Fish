import React, { useContext } from "react";
import { FlatList, Text, View } from "react-native";
import { FishSpecies } from "../types/fish.types";
import { fishImages } from "../utilities/fishImages";
import { Image } from "expo-image";
import { FishesContext } from "../context/fishesContext";

const FishTank: React.FC = () => {
    const { fishes } = useContext(FishesContext);

    const renderFishItem = ({ item }: { item: FishSpecies }) => {
        const fishSource = fishImages[item.name.replace(" ", "")];
        return (
            <View>
                <Image style={{ width: 40, height: 40 }} source={fishSource} />
                <Text>Name: {item.name}</Text>
            </View>
        );
    };
    console.log(fishes);

    return (
        <FlatList
            data={Array.from(fishes.keys())}
            renderItem={renderFishItem}
            keyExtractor={(item) => item.name}
        />
    );
};

export default FishTank;
