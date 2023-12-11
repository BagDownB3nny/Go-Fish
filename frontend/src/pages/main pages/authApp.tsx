import React, { useContext } from "react";

import { AuthContext } from "../../context/authContext";
import { Entry } from "./entry";
import { MainApp } from "./mainApp";

export default function AuthApp() {
    const { currentUser } = useContext(AuthContext);
    return <>{currentUser.token !== "" ? <MainApp /> : <Entry />}</>;
}
