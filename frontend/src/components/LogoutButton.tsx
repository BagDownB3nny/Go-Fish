import React, { useContext } from "react";
import { Button } from "react-native";
import { AuthContext } from "../context/authContext";
import { removeAuthHeader } from "../lib/axios";
import { User } from "../types/user.types";
import * as SecureStorage from "expo-secure-store";

const LogoutButton: React.FC = () => {
    const { setCurrentUser } = useContext(AuthContext);

    const handleLogout = () => {
        const emptyUser: User = {
            token: "",
            userId: "",
        };
        setCurrentUser(emptyUser);
        SecureStorage.setItemAsync("token", "");
        SecureStorage.setItemAsync("userId", "");
        removeAuthHeader();
    };

    return <Button title="Logout" onPress={handleLogout} />;
};

export default LogoutButton;
