import React, { useContext } from "react";
import { Form, useForm, Controller } from "react-hook-form";
import { View, Text, TextInput, Button } from "react-native";
import { api, setAuthHeader } from "../lib/axios";
import { AuthContext } from "../context/authContext";
import * as SecureStore from "expo-secure-store";

type LoginFormData = {
    email: string;
    password: string;
};

const LoginPage = () => {
    const { currentUser, setCurrentUser } = useContext(AuthContext);

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<LoginFormData>();

    const onSubmit = (data: LoginFormData) => {
        // Handle form submission here
        console.log(data);
        api.post("/user/login", data).then((res) => {
            console.log(res.data);
            setCurrentUser({
                token: res.data.token,
                userId: res.data.userId,
            });
            setAuthHeader(res.data.token);
            SecureStore.setItemAsync("token", res.data.token);
            SecureStore.setItemAsync("userId", res.data.userId);
        });
    };

    return (
        <View>
            <Text>Email</Text>
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value, onBlur } }) => (
                    <TextInput
                        placeholder="Enter your email here"
                        value={value}
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                    />
                )}
                rules={{
                    required: {
                        value: true,
                        message: "Field is required!",
                    },
                }}
            />
            <Text>Password</Text>
            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value, onBlur } }) => (
                    <TextInput
                        placeholder="Enter your password here"
                        value={value}
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                    />
                )}
                rules={{
                    required: {
                        value: true,
                        message: "Field is required!",
                    },
                }}
            />

            <Button
                title="Login"
                onPress={() => {
                    console.log("Login button pressed");
                    handleSubmit(onSubmit)();
                }}
            />
        </View>
    );
};

export default LoginPage;