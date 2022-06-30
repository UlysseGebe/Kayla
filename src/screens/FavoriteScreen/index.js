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

const cards = [{ id: 0 }, { id: 2 }, { id: 3 }, { id: 4 }];

export default function FavoriteScreen({ navigation }) {
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
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        ListHeaderComponent={() => {
          return (
            <>
              <FilterComponent openFilter={false} freeze={freezeFN} />
              <Text style={Styles.subTitle}>Ton activité du jour !</Text>
            </>
          );
        }}
        pagingEnabled
        data={cards}
        keyExtractor={(item) => "CardMain" + item.id}
        renderItem={({ item }) => <CardMainComponent item={item} />}
      />
    </SafeAreaView>
  );
}
