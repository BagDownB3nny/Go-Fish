import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginPage from "../login";
import RegisterPage from "../register";

const Tab = createBottomTabNavigator();

export const Entry = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={LoginPage} />
                <Tab.Screen name="Register" component={RegisterPage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
