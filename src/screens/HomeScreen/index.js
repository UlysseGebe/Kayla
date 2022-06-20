import { StatusBar } from "expo-status-bar";
import { Button, Text, View, Image } from "react-native";
import Styles from "./style";
import CardMainComponent from "../../components/CardMainComponent"

export default function HomeScreen({ navigation }) {
  return (
    <View style={Styles.container}>
      <Image
        source={require("../../assets/images/background.png")}
        style={Styles.background}
      />
      <CardMainComponent />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        title="Go to Activity"
        onPress={() => navigation.navigate("Activity")}
      />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}
