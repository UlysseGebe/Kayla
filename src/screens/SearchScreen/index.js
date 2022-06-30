import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Button,
  ScrollView,
  Pressable,
  Text,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");
import Styles from "./style";
import FilterComponent from "../../components/FilterComponent";
import CardMainComponent from "../../components/CardMainComponent";
import Data from "./data";

export default function SearchScreen({ navigation }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [freezer, setFreezer] = useState(false);
  const ref = useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const freezeFN = (val) => {
    setFreezer(val);
  };
  return (
    <SafeAreaView style={Styles.container}>
      <Image
        source={require("../../assets/images/background.png")}
        style={Styles.background}
      />
      <FilterComponent openFilter={false} freeze={freezeFN} />
      <Text style={Styles.subTitle}>Résultat</Text>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={[Data[15], Data[16], Data[17], Data[18], Data[19], Data[20]]}
        keyExtractor={(item) => "CardMain" + item.id}
        renderItem={({ item }) => <CardMainComponent item={item} />}
      />
    </SafeAreaView>
  );
}
