import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Styles from "./style";
import Icon from "../CustomIcon";
import { useNavigation } from "@react-navigation/native";

export default function CardTopComponent() {
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite(!favorite);
  };
  return (
    <Pressable
      style={Styles.container}
      onPress={() => navigation.navigate("Activity")}
    >
      <View style={Styles.titleContainer}>
        <Pressable onPress={handleFavorite}>
          <Icon icon="eye" size={20} color="#90BDD0" />
        </Pressable>
        <Text numberOfLines={1} style={Styles.title}>
          Aquarium DIY
        </Text>
      </View>
      <View>
        <Text numberOfLines={2} style={Styles.text}>
          Une fois cet aquarium en carton réalisé, votre enfant sera comme un
          poisson dans l'eau
        </Text>
        <View style={Styles.statContainer}>
          <View style={Styles.stat}>
            <Icon
              style={Styles.statIcon}
              icon="eye"
              size={14}
              color="#005B85"
            />
            <Text style={Styles.statText}>30 min</Text>
          </View>
          <View style={Styles.stat}>
            <Icon
              style={Styles.statIcon}
              icon="eye"
              size={14}
              color="#005B85"
            />
            <Text style={Styles.statText}>3 à 10 ans</Text>
          </View>
          <View style={Styles.stat}>
            <Icon
              style={Styles.statIcon}
              icon="eye"
              size={14}
              color="#005B85"
            />
            <Text style={Styles.statText}>10 euros</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
