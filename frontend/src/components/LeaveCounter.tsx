import React, { useEffect, useState } from "react";
import { AppState, AppStateStatus, Text } from "react-native";

export const LeaveCounter = () => {
    let a: number = 0;
    let b: number = 0;

    AppState.addEventListener("change", (nextAppState) => {
        if (nextAppState === "inactive") {
            a = new Date().getTime();
        }
        if (nextAppState === "background") {
            b = new Date().getTime();
            if (b - a < 10) {
                console.log("Screen locked");
            } else if (b - a > 100) {
                console.log("App left");
            }
        }
        if (nextAppState === "active") {
            console.log("active");
            a = 0;
            b = 0;
        }
    });

    return <></>;
};
