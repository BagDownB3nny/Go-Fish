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
                <Image
                    style={{ width: 40, height: 40 }}
                    source={fishSource}
                    // source="https://picsum.photos/seed/696/3000/2000"
                />
                <Text>Name: {item.name}</Text>
                <Text>Length: {item.lengthInCm} cm</Text>
                <Text>Caught Date: {item.caughtDate}</Text>
            </View>
        );
    };

    console.log(fishList);

    return (
        <>
            <Text>List: </Text>
            <FlatList
                data={fishList}
                renderItem={renderFishItem}
                keyExtractor={(item) => item.name}
            />
        </>
    );
};

export default FishTank;
