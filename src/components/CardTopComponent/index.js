import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Styles from "./style";
import Icon from "../CustomIcon";

export default function CardTopComponent() {
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite(!favorite)
  }
  return (
    <View style={Styles.container}>
      <View>
        <Pressable onPress={handleFavorite}>
          <Icon icon="eye" size={22} color="#90BDD0" />
        </Pressable>
        <Text>Aquarium DIY</Text>
      </View>
      <View>
        <Text>Une fois cet aquarium en carton réalisé, votre enfant sera comme un poisson</Text>
        <View>
          <View>
            <Icon />
            <Text>30 min</Text>
          </View>
          <View>
            <Icon />
            <Text>3 à 10 ans</Text>
          </View>
          <View>
            <Icon />
            <Text>10 euros</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
