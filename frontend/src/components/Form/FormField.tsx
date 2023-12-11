import React from "react";
import { Text } from "react-native";
import { Controller } from "react-hook-form";
import { CustomTextInput } from "../CustomTextInput";

interface FormFieldProps {
    fieldName: string;
    control: any;
}

export const FormField: React.FC<FormFieldProps> = ({ fieldName, control }) => {
    return (
        <>
            <Text>{fieldName}</Text>
            <Controller
                control={control}
                name={fieldName}
                render={({ field: { onChange, value, onBlur } }) => (
                    <CustomTextInput
                        placeholder={`Enter your ${fieldName} here`}
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
        </>
    );
};

export default FormField;
