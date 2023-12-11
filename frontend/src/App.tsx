import React from "react";
import AuthApp from "./pages/main pages/authApp";

import { AuthProvider } from "./context/authContext";

export default function App() {
    return (
        <AuthProvider>
            <AuthApp />
        </AuthProvider>
    );
}
