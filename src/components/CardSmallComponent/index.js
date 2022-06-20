import { View, Image, Text } from "react-native";
import Styles from "./style";

export default function CardSmallComponent() {
  return (
    <View style={Styles.container}>
      <View>
        <Image source={require("../../assets/images/preview.png")} />
      </View>
      <View>
        <Text>DIY: faire une tête de dragon</Text>
        <Text>Il y a 1 mois</Text>
      </View>
    </View>
  );
}
