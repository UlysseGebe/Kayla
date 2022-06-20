import { View, Image, Text, Pressable } from "react-native";
import Styles from "./style";
import { useNavigation } from "@react-navigation/native";

export default function CardSmallComponent() {
  const navigation = useNavigation();
  return (
    <Pressable
      style={Styles.container}
      onPress={() => navigation.navigate("Activity")}
    >
      <View style={Styles.imageContainer}>
        <Image
          style={Styles.image}
          source={require("../../assets/images/preview.png")}
        />
      </View>
      <View style={Styles.textContainer}>
        <Text numberOfLines={1} style={Styles.title}>
          DIY: faire une tête de dragon
        </Text>
        <Text style={Styles.date}>Il y a 1 mois</Text>
      </View>
    </Pressable>
  );
}
