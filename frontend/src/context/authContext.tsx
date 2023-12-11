import React, { createContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

type User = {
    token?: string;
    userId?: string;
};

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
            const token =
                (await SecureStore.getItemAsync("token")) || undefined;
            const userId =
                (await SecureStore.getItemAsync("userId")) || undefined;
            setCurrentUser({ token, userId });
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
