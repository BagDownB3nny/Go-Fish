import React from "react";
import { FlatList, Text, View } from "react-native";
import { Fish } from "../types/fish.types";
import { fishImages } from "../utilities/fishImages";
import { Image } from "expo-image";

type FishTankProps = {
    fishList: Fish[];
};

const FishTank: React.FC<FishTankProps> = ({ fishList }) => {
    const renderFishItem = ({ item }: { item: Fish }) => {
        const fishSource = fishImages[item.name.replace(" ", "")];
        return (
            <View>
                <Image style={{ width: 40, height: 40 }} source={fishSource} />
                <Text>Name: {item.name}</Text>
                <Text>Length: {item.lengthInCm} cm</Text>
                <Text>Caught Date: {item.caughtDate}</Text>
            </View>
        );
    };

    return (
        <FlatList
            data={fishList}
            renderItem={renderFishItem}
            keyExtractor={(item) => item.name + item.caughtDate}
        />
    );
};

export default FishTank;
