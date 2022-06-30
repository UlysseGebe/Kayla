import React from 'react';
import { View, Image, Text, Pressable } from "react-native";
import Styles from "./style";
import { useNavigation } from "@react-navigation/native";

export default function CardSmallComponent({ item }) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={Styles.container}
      onPress={() => navigation.navigate("Activity", {itemId: item.id })}
    >
      <View style={Styles.imageContainer}>
        <Image
          style={Styles.image}
          source={item.thumbnail ? {uri: `https://kayla-project.herokuapp.com${item.thumbnail.url}`} : require("../../assets/images/preview.png")}
        />
      </View>
      <View style={Styles.textContainer}>
        <Text numberOfLines={1} style={Styles.title}>
          {item.name}
        </Text>
        <Text style={Styles.date}>Il y a 1 mois</Text>
      </View>
    </Pressable>
  );
}
