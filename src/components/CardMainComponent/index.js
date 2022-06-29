import React, { useState } from "react";
import { View, Image, Text, Pressable } from "react-native";
import Styles from "./style";
import Icon from "../CustomIcon";
import { useNavigation } from "@react-navigation/native";

export default function CardMainComponent({ item }) {
  const navigation = useNavigation();
  let price = 0,
    duration = 0;
  item.range.forEach((element) => {
    if (element.__component == "range.price") {
      price = element;
    }
    if (element.__component == "range.duration") {
      duration = element;
    }
  });
  return (
    <Pressable
      style={Styles.container}
      onPress={() => navigation.navigate("ActivityTab", {itemId: item.id })}
    >
      <View style={Styles.imageContainer}>
        <Pressable style={Styles.imageIcon}>
          {/* <Icon icon="eye" size={22} color="#90BDD0" /> */}
        </Pressable>
        <Image
          style={Styles.image}
          source={require("../../assets/images/preview.png")}
        />
      </View>
      <View style={Styles.textContainer}>
        <Text numberOfLines={1} style={Styles.title}>
          {item.name}
        </Text>
        <View style={Styles.statContainer}>
          <View style={Styles.stat}>
            <Icon
              style={Styles.statIcon}
              icon="time"
              size={18}
              color="#005B85"
            />
            <Text style={Styles.statText}>
              {duration.maximum || duration.minimum} min
            </Text>
          </View>
          <View style={Styles.stat}>
            <Icon
              style={Styles.statIcon}
              icon="personne"
              size={20}
              color="#005B85"
            />
            <Text style={Styles.statText}>3 à 10 ans</Text>
          </View>
          <View style={Styles.stat}>
            <Icon
              style={Styles.statIcon}
              icon="price"
              size={18}
              color="#005B85"
            />
            <Text style={Styles.statText}>
              {price.maximum || price.minimum} euros
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
