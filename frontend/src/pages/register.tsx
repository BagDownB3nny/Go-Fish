import React from "react";
import { useForm } from "react-hook-form";
import CustomForm from "../components/Form/CustomForm";
import { api } from "../lib/axios";

export type RegisterFormData = {
    username: string;
    email: string;
    password: string;
};

const RegisterPage = () => {
    const { control, handleSubmit } = useForm<RegisterFormData>();

    const onSubmit = (data: RegisterFormData) => {
        console.log("Registering");
        api.post("/user/register", data).then((res) => {
            console.log(res.data.message);
        });
    };

    return (
        <CustomForm
            fields={["username", "email", "password"]}
            onSubmit={onSubmit}
            control={control}
            handleSubmit={handleSubmit}
        />
    );
};

export default RegisterPage;
