import { TextInput, TextInputProps } from "react-native";

export const CustomTextInput = (props: TextInputProps) => {
    return <TextInput autoCapitalize="none" {...props} />;
};
