import React from "react";
import { Modal, Text, View, Button } from "react-native";
import { Fish } from "../types/fish.types";

interface FishCaughtModalProps {
    fish?: Fish;
    visible: boolean;
    onClose: () => void;
    closeModal: () => void;
}

const FishCaughtModal: React.FC<FishCaughtModalProps> = ({
    fish,
    visible,
    onClose,
    closeModal,
}) => {
    if (!fish) {
        return null;
    }
    return (
        <Modal visible={visible} onRequestClose={onClose}>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 22,
                }}
            >
                <Text>Name: {fish.name}</Text>
                <Text>Length: {fish.lengthInCm} inches</Text>
                <Button title="Close modal" onPress={closeModal} />
            </View>
        </Modal>
    );
};

export default FishCaughtModal;
