import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Button,
  ScrollView,
  Pressable,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");
import Styles from "./style";
import FilterComponent from "../../components/FilterComponent";
import CardMainComponent from "../../components/CardMainComponent";

const cards = [{ id: 0 }, { id: 2 }, { id: 3 }, { id: 4 }];

export default function FavoriteScreen({ navigation }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  return (
    <SafeAreaView style={Styles.container}>
      <Image
        source={require("../../assets/images/background.png")}
        style={Styles.background}
      />
      <FilterComponent />
      <View>
        <Text style={Styles.subTitle}>Ton activité du jour !</Text>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          pagingEnabled
          data={cards}
          keyExtractor={(item) => "CardMain" + item.id}
          renderItem={({ item }) => <CardMainComponent item={item} />}
        />
      </View>
    </SafeAreaView>
  );
}
