import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomePage from "./pages/home";
import TankPage from "./pages/tank";
import ProfilePage from "./pages/profile";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomePage} />
                <Tab.Screen name="Tank" component={TankPage} />
                <Tab.Screen name="Profile" component={ProfilePage} />
                <Tab.Screen name="Register" component={RegisterPage} />
                <Tab.Screen name="Login" component={LoginPage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
