import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider as PaperProvider } from "react-native-paper";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/Store";

import HomeScreen from "./src/screens/HomeScreen";
import FavoriteScreen from "./src/screens/FavoriteScreen";
import CalendarScreen from "./src/screens/CalendarScreen";
import ProfilScreen from "./src/screens/ProfilScreen";
import ActivityScreen from "./src/screens/ActivityScreen";
import ActivityEndScreen from "./src/screens/ActivityEndScreen";
import StepsScreen from "./src/screens/StepsScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import SelectionScreen from "./src/screens/SelectionScreen";
import LoginScreen from "./src/screens/Authentication/Login";
import RegisterScreen from "./src/screens/Authentication/Register";
import Icon from "./src/components/CustomIcon";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);
  React.useEffect(async () => {
    const appData = await AsyncStorage.getItem("isAppFirstLaunched");
    if (appData == null) {
      setIsAppFirstLaunched(true);
      // AsyncStorage.setItem("isAppFirstLaunched", "true");
      AsyncStorage.setItem("isAppFirstLaunched", "false");
    } else {
      // setIsAppFirstLaunched(true);
      setIsAppFirstLaunched(false);
    }
    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName={isAppFirstLaunched ? "Onboarding" : "Home"}
              screenOptions={({ route }) => ({
                header: () => null,
                cardStyle: {
                  backgroundColor: "transparent",
                },
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  iconName = focused ? "eye" : "eye";

                  return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <Stack.Screen detachInactiveScreens={false} name="Onboarding" component={OnboardingScreen} />
              <Stack.Screen name="Selection" component={SelectionScreen} />
              <Stack.Screen name="Home" component={Tabs} />
              <Stack.Screen name="Favorite" component={Tabs} />
              <Stack.Screen name="Profil" component={ProfilScreen} />
              <Stack.Screen name="Activity" component={ActivityScreen} />
              <Stack.Screen name="Calendar" component={CalendarScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen
                name="Steps"
                component={StepsScreen}
                initialParams={{ itemId: 0 }}
              />
              <Stack.Screen name="ActivityEnd" component={ActivityEndScreen} />
              <Stack.Screen
                name="Details"
                component={DetailsScreen}
                initialParams={{ itemId: 42 }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
