import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider as PaperProvider } from "react-native-paper";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/Store";

import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import LoginScreen from "./src/screens/Authentication/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);
  React.useEffect(async () => {
    const appData = await AsyncStorage.getItem("isAppFirstLaunched");
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem("isAppFirstLaunched", "true");
      // AsyncStorage.setItem("isAppFirstLaunched", "false");
    } else {
      setIsAppFirstLaunched(true);
      // setIsAppFirstLaunched(false);
    }
    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          {isAppFirstLaunched != null && (
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  header: () => null,
                  cardStyle: {
                    backgroundColor: "transparent",
                  },
                }}
              >
                {isAppFirstLaunched && (
                  <Stack.Screen
                    name="Onboarding"
                    component={OnboardingScreen}
                  />
                )}
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen
                  name="Details"
                  component={DetailsScreen}
                  initialParams={{ itemId: 42 }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          )}
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
