import { useEffect, useState } from 'react';
import { EventRegister } from "react-native-event-listeners";
import { catchFish } from '../features/fishing/catch-fish';
import { Fish } from '../types/fish.types';

const useTimer = (defaultTime: number) => {

    const [isActive, setIsActive] = useState(false);
    const [seconds, setSeconds] = useState(defaultTime);
    const [caughtFish, setCaughtFish] = useState<Fish>();

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isActive) {
        if (seconds === 0) {
            setIsActive(false);
            setSeconds(defaultTime);
            catchFish("65735d38ff4fa64cbdf98324")
                .then((caughtFish) => {
                    console.log(caughtFish);
                    setCaughtFish(caughtFish);
                });
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

  return { seconds, setIsActive, caughtFish, setCaughtFish };
};

export default useTimer;
