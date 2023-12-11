import * as SecureStore from 'expo-secure-store';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { removeAuthHeader } from "../../lib/axios";
import { User } from "../../types/user.types";

export const logout = async (setCurrentUser: React.Dispatch<React.SetStateAction<User>>) => {

    const emptyUser: User = {
        token: "",
        userId: "",
    };
    setCurrentUser(emptyUser);
    SecureStore.setItemAsync("token", "");
    SecureStore.setItemAsync("userId", "");
    removeAuthHeader();
};