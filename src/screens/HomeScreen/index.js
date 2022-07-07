import React, { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import axios from "axios";
const { width, height } = Dimensions.get("window");
import Styles from "./style";
import FilterComponent from "../../components/FilterComponent";
import CardMainComponent from "../../components/CardMainComponent";
import CardSmallComponent from "../../components/CardSmallComponent";
import CardTopComponent from "../../components/CardTopComponent";
import Section from "./section"

export default function HomeScreen({ route }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activity, setActivity] = useState([]);
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

  useEffect(() => {
    const source = axios.CancelToken.source();
    const url = "https://kayla-project.herokuapp.com/api/activities";
    const fetchAdvice = async () => {
      try {
        const response = await axios.get(url + "?pagination[pageSize]=11&populate=*");
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
      <ScrollView scrollEnabled={!freezer}>
        <FilterComponent
          openFilter={route.params.openFilter}
          freeze={freezeFN}
        />
        <Section activity={activity.splice(0,4)} />
        <View style={{ flexDirection: "column" }}>
          <Text style={Styles.subTitle}>Notre sélection</Text>
          <FlatList
            style={{ overflow: "visible", marginHorizontal: 5 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={activity.splice(0,4)}
            keyExtractor={(item) => "CardSmall" + item.id}
            renderItem={({ item }) => <CardSmallComponent item={item} />}
          />
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={Styles.subTitle}>Le top</Text>
          <FlatList
            style={{ overflow: "visible", marginHorizontal: 8 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={activity.splice(0,4)}
            keyExtractor={(item) => "CardTop" + item.id}
            renderItem={({ item }) => <CardTopComponent item={item} />}
          />
        </View>
        <View style={{ height: 100 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
