import React, { useState, useRef, useEffect } from "react";
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
import axios from "axios";
const { width, height } = Dimensions.get("window");
import Styles from "./style";
import FilterComponent from "../../components/FilterComponent";
import CardMainComponent from "../../components/CardMainComponent";
import Data from "./data";

export default function SearchScreen({ navigation }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [freezer, setFreezer] = useState(false);
  const [activity, setActivity] = useState([]);
  const ref = useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const freezeFN = (val) => {
    setFreezer(val);
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    const url = "https://kayla-project.herokuapp.com/api/activities";
    const fetchAdvice = async () => {
      try {
        const response = await axios.get(url + "?filters[id][$eq][0]=4&filters[id][$eq][1]=9&filters[id][$eq][2]=10&populate=*");
        if (response.status === 200) {
          setActivity(response.data.data);
          return;
        } else {
          throw new Error("Failed to fetch activity");
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Data fetching cancelled");
        }
      }
    };
    fetchAdvice();
    return () => source.cancel("Data fetching cancelled");
  }, [activity]);
  return (
    <SafeAreaView style={Styles.container}>
      <Image
        source={require("../../assets/images/background.png")}
        style={Styles.background}
      />
      <FilterComponent openFilter={false} freeze={freezeFN} />
      <Text style={Styles.subTitle}>Résultat</Text>
      <FlatList
        style={{marginBottom: 30}}
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={activity}
        keyExtractor={(item) => "CardMain" + item.id}
        renderItem={({ item }) => <CardMainComponent item={item} />}
      />
    </SafeAreaView>
  );
}
