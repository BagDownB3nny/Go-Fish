import React from "react";
import { Button, View } from "react-native";
import FormField from "./FormField";

type FormProps = {
    fields: string[];
    onSubmit: (data: any) => void;
    control: any;
    handleSubmit: any;
};

export const CustomForm: React.FC<FormProps> = ({
    fields,
    onSubmit,
    control,
    handleSubmit,
}) => {
    return (
        <View>
            {fields.map((fieldName) => (
                <React.Fragment key={fieldName}>
                    <FormField fieldName={fieldName} control={control} />
                </React.Fragment>
            ))}
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    );
};

export default CustomForm;
