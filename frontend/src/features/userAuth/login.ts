import { LoginFormData } from "../../pages/login";
import { api, setAuthHeader } from "../../lib/axios";
import { User } from "../../types/user.types";
import * as SecureStore from 'expo-secure-store';

export const login = async (data : LoginFormData, setCurrentUser : React.Dispatch<React.SetStateAction<User>>) => {

    api.post("/user/login", data).then((res) => {
        setCurrentUser({
            token: res.data.token,
            userId: res.data.userId,
        });
        setAuthHeader(res.data.token);
        SecureStore.setItemAsync("token", res.data.token);
        SecureStore.setItemAsync("userId", res.data.userId);
    });
};