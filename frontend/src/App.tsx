import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomePage from "./pages/home";
import TankPage from "./pages/tank";
import ProfilePage from "./pages/profile";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomePage} />
                <Tab.Screen name="Tank" component={TankPage} />
                <Tab.Screen name="Profile" component={ProfilePage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
