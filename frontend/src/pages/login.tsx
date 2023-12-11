import React, { useContext } from "react";
import { set, useForm } from "react-hook-form";
import { View } from "react-native";
import { CustomForm } from "../components/Form/CustomForm";
import { login } from "../features/userAuth/login";
import { AuthContext } from "../context/authContext";

export type LoginFormData = {
    email: string;
    password: string;
};

const LoginPage = () => {
    const { control, handleSubmit } = useForm<LoginFormData>();
    const { setCurrentUser } = useContext(AuthContext);

    const onSubmit = (data: LoginFormData) => {
        login(data, setCurrentUser);
    };

    return (
        <View>
            <CustomForm
                fields={["email", "password"]}
                onSubmit={onSubmit}
                control={control}
                handleSubmit={handleSubmit}
            />
        </View>
    );
};

export default LoginPage;
