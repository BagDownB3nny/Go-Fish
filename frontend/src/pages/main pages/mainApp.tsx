import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomePage from "../home";
import ProfilePage from "../profile";
import TankPage from "../tank";

import { FishesProvider } from "../../context/fishesContext";

const Tab = createBottomTabNavigator();

export const MainApp = () => {
    return (
        <FishesProvider>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomePage} />
                    <Tab.Screen name="Tank" component={TankPage} />
                    <Tab.Screen name="Profile" component={ProfilePage} />
                </Tab.Navigator>
            </NavigationContainer>
        </FishesProvider>
    );
};
