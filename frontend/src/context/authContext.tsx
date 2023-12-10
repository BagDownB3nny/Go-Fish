import React, { createContext, useState, useEffect } from "react";
import { set } from "react-hook-form";

type User = {
    token?: string;
    userId?: string;
};

export const AuthContext = createContext<User>({});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [currentUser, setCurrentUser] = useState<User>({});

    useEffect(() => {
        const token = localStorage.getItem("token") || undefined;
        const userId = localStorage.getItem("userId") || undefined;
        setCurrentUser({ token, userId });
    }, []);

    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    );
};
