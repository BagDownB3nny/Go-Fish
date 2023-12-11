import React from "react";
import { Form, useForm, Controller } from "react-hook-form";
import { View, Text, TextInput, Button } from "react-native";
import { api } from "../lib/axios";
import { CustomTextInput } from "../components/CustomTextInput";

type RegisterFormData = {
    username: string;
    email: string;
    password: string;
};

const RegisterPage = () => {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<RegisterFormData>();

    const onSubmit = (data: RegisterFormData) => {
        // Handle form submission here
        console.log(data);
        api.post("/user/register", data).then((res) => {
            console.log(res.data.message);
        });
    };

    return (
        <View>
            <Text>Username</Text>
            <Controller
                control={control}
                name="username"
                render={({ field: { onChange, value, onBlur } }) => (
                    <CustomTextInput
                        placeholder="Enter your name here"
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
            <Text>Email</Text>
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value, onBlur } }) => (
                    <CustomTextInput
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
                    <CustomTextInput
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
                title="Register"
                onPress={() => {
                    console.log("Register button pressed");
                    handleSubmit(onSubmit)();
                }}
            />
        </View>
    );
};

export default RegisterPage;
