import React, { useEffect, useState } from "react";
import { Text, Button } from "react-native";
import { setupAppStateListener } from "../utilities/appStateListener";
import { EventRegister } from "react-native-event-listeners";
import useTimer from "../hooks/useTimer";

const defaultTime = 30;

const Timer = () => {
    const { seconds, setIsActive } = useTimer(defaultTime);

    setupAppStateListener();

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
        </>
    );
};

export default Timer;
