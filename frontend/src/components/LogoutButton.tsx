import React, { useContext } from "react";
import { Button } from "react-native";
import { logout } from "../features/userAuth/logout";
import { AuthContext } from "../context/authContext";

const LogoutButton: React.FC = () => {
    const { setCurrentUser } = useContext(AuthContext);

    return <Button title="Logout" onPress={() => logout(setCurrentUser)} />;
};

export default LogoutButton;
