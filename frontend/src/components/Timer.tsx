import React, { useEffect, useState } from "react";
import { Text, Button } from "react-native";
import { setupAppStateListener } from "../utilities/appStateListener";
import { EventRegister } from "react-native-event-listeners";
import useTimer from "../hooks/useTimer";
import FishCaughtModal from "./FishCaughtModal";

const defaultTime = 2;

const Timer: React.FC<{ bait: string }> = ({ bait }) => {
    const { seconds, setIsActive, caughtFish, setCaughtFish, setBait } =
        useTimer(defaultTime);

    setupAppStateListener();

    useEffect(() => {
        setBait(bait);
    }, [bait]);

    const closeModal = () => setCaughtFish(undefined);

    const startTimer = () => {
        setIsActive(true);
    };

    return (
        <>
            <Text>{seconds} seconds left</Text>
            <Button
                title="Start"
                onPress={startTimer}
                disabled={seconds !== defaultTime}
            />
            <FishCaughtModal
                visible={caughtFish !== null}
                onClose={() => console.log("close")}
                fish={caughtFish}
                closeModal={closeModal}
            />
        </>
    );
};

export default Timer;
