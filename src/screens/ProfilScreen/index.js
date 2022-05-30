import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import Styles from "./style";

export default function ProfilScreen({ navigation }) {
  return (
    <View style={Styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
