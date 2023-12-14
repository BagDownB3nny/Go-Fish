import React from "react";
import { Modal, Text, View, Button } from "react-native";

interface FishCaughtModalProps {
    caughtFishName?: string;
    visible: boolean;
    onClose: () => void;
    closeModal: () => void;
}

const FishCaughtModal: React.FC<FishCaughtModalProps> = ({
    caughtFishName,
    visible,
    onClose,
    closeModal,
}) => {
    if (!caughtFishName) {
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
                <Text>Fish Caught!</Text>
                <Text>Name: {caughtFishName}</Text>
                <Button title="Close modal" onPress={closeModal} />
            </View>
        </Modal>
    );
};

export default FishCaughtModal;
