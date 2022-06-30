import React from 'react';
import { View, Text, Pressable } from "react-native";
import Styles from "./style";
import Icon from "../CustomIcon";
import { useNavigation } from "@react-navigation/native";

export default function CardTopComponent({ item }) {
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
      onPress={() => navigation.navigate("Activity", {itemId: item.id })}
    >
      <View style={Styles.titleContainer}>
        <Pressable>
          {/* <Icon icon="eye" size={20} color="#90BDD0" /> */}
        </Pressable>
        <Text numberOfLines={1} style={Styles.title}>
          {item.name}
        </Text>
      </View>
      <View>
        <Text numberOfLines={2} style={Styles.text}>
          {item.description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        </Text>
        <View style={Styles.statContainer}>
          <View style={Styles.stat}>
            <Icon
              style={Styles.statIcon}
              icon="time"
              size={14}
              color="#005B85"
            />
            <Text style={Styles.statText}>{duration.maximum} min</Text>
          </View>
          <View style={Styles.stat}>
            <Icon
              style={Styles.statIcon}
              icon="personne"
              size={14}
              color="#005B85"
            />
            <Text style={Styles.statText}>3 à 10 ans</Text>
          </View>
          <View style={Styles.stat}>
            <Icon
              style={Styles.statIcon}
              icon="price"
              size={14}
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
