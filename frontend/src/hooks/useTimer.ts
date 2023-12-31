import { useEffect, useState, useContext } from 'react';
import { EventRegister } from "react-native-event-listeners";
import { catchFish } from '../features/fishing/catch-fish';
import { FishSpecies } from '../types/fish.types';
import { AuthContext } from '../context/authContext';

const useTimer = (defaultTime: number) => {

    const { currentUser } = useContext(AuthContext);

    const [isActive, setIsActive] = useState(false);
    const [seconds, setSeconds] = useState(defaultTime);
    const [caughtFishName, setCaughtFishName] = useState<string>();
    const [bait, setBait] = useState<string>("None");

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isActive) {
        if (seconds === 0) {
            setIsActive(false);
            setSeconds(defaultTime);
            catchFish(currentUser.userId!, bait)
                .then((caughtFish) => {
                    console.log("Caught fish!");
                    console.log(caughtFish);
                    setCaughtFishName(caughtFish);
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

  return { seconds, setIsActive, caughtFishName, setCaughtFishName, setBait };
};

export default useTimer;
