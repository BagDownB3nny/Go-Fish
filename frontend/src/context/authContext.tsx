import React, { createContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { setAuthHeader } from "../lib/axios";
import { User } from "../types/user.types";

type AuthContextType = {
    currentUser: User;
    setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
};

export const AuthContext = createContext<AuthContextType>(
    {} as AuthContextType
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [currentUser, setCurrentUser] = useState<User>({});

    useEffect(() => {
        const fetchToken = async () => {
            const token = (await SecureStore.getItemAsync("token")) || "";
            const userId = (await SecureStore.getItemAsync("userId")) || "";

            if (token === "" || userId === "") {
                return;
            } else {
                setCurrentUser({ token, userId });
                setAuthHeader(token);
            }
        };
        fetchToken();
    }, []);

    useEffect(() => {
        console.log("Current user changed!");
        console.log(currentUser);
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
