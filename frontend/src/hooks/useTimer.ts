import { useEffect, useState } from 'react';
import { EventRegister } from "react-native-event-listeners";

const useTimer = (defaultTime: number) => {

    const [isActive, setIsActive] = useState(false);
    const [seconds, setSeconds] = useState(defaultTime);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isActive) {
        if (seconds === 0) {
            setIsActive(false);
            setSeconds(defaultTime);
        }

        interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds, defaultTime]);

    EventRegister.addEventListener("appLeft", () => {
        setIsActive(false);
        setSeconds(defaultTime);
        console.log("Timer stopped");
    });
    EventRegister.addEventListener("screenLocked", () => {
        console.log("Timer continues");
    });

  return { seconds, setIsActive };
};

export default useTimer;
