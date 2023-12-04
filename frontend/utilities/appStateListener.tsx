import { AppState, AppStateStatus } from "react-native";
import { EventRegister } from "react-native-event-listeners";

export function setupAppStateListener() {
    let a: number = 0;
    let b: number = 0;

    const handleAppStateChange = (nextAppState: AppStateStatus) => {
        if (nextAppState === "inactive") {
            a = new Date().getTime();
        }
        if (nextAppState === "background") {
            b = new Date().getTime();
            if (b - a < 10) {
                console.log("Screen locked");
                EventRegister.emit("screenLocked", "screenLocked");
            } else if (b - a > 100) {
                console.log("App left");
                EventRegister.emit("appLeft", "appLeft");
            }
        }
        if (nextAppState === "active") {
            console.log("active");
            EventRegister.emit("appActive", "appActive");
            a = 0;
            b = 0;
        }
    };

    AppState.addEventListener("change", handleAppStateChange);
}
