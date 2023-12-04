import React, { useEffect, useState } from "react";
import { Text, Button } from "react-native";
import { setupAppStateListener } from "../utilities/appStateListener";
import { EventRegister } from "react-native-event-listeners";

const defaultTime = 30;

const Timer = () => {
    const [seconds, setSeconds] = useState(defaultTime);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isActive) {
            if (seconds === 0) {
                setIsActive(false);
                setSeconds(defaultTime);
            }
            interval = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
                console.log(seconds - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    setupAppStateListener();
    EventRegister.addEventListener("appLeft", () => {
        setIsActive(false);
        setSeconds(defaultTime);
        console.log("Timer stopped");
    });
    EventRegister.addEventListener("screenLocked", () => {
        console.log("Timer continues");
    });

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
