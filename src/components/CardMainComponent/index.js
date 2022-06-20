import React, { useState } from "react";
import { View, Image, Text, Pressable } from "react-native";
import Styles from "./style";
import Icon from "../CustomIcon";
import { useNavigation } from "@react-navigation/native";

export default function CardMainComponent() {
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    console.log("ok");
    setFavorite(!favorite);
  };
  return (
    <Pressable style={Styles.container} onPress={() => navigation.navigate("Activity")}>
      <View style={Styles.imageContainer}>
        <Pressable onPress={handleFavorite} style={Styles.imageIcon}>
          <Icon icon="eye" size={22} color="#90BDD0" />
        </Pressable>
        <Image
          style={Styles.image}
          source={require("../../assets/images/preview.png")}
        />
      </View>
      <View style={Styles.textContainer}>
        <Text numberOfLines={1} style={Styles.title}>Aquarium DIY</Text>
        <View style={Styles.statContainer}>
          <View style={Styles.stat}>
            <Icon style={Styles.statIcon} icon="eye" size={22} color="#005B85" />
            <Text style={Styles.statText}>30 min</Text>
          </View>
          <View style={Styles.stat}>
            <Icon style={Styles.statIcon} icon="eye" size={22} color="#005B85" />
            <Text style={Styles.statText}>3 à 10 ans</Text>
          </View>
          <View style={Styles.stat}>
            <Icon style={Styles.statIcon} icon="eye" size={22} color="#005B85" />
            <Text style={Styles.statText}>10 euros</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
