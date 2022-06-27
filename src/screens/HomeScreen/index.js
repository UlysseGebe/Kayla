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
import CardSmallComponent from "../../components/CardSmallComponent";
import CardTopComponent from "../../components/CardTopComponent";

const cards = [{ id: 0 }, { id: 2 }, { id: 3 }, { id: 4 }];

export default function HomeScreen({ navigation }) {
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
      <ScrollView>
        <View>
          <Text style={Styles.subTitle}>Ton activité du jour !</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            ref={ref}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            pagingEnabled
            horizontal
            data={cards}
            keyExtractor={(item) => "CardMain" + item.id}
            renderItem={({ item }) => <CardMainComponent item={item} />}
          />
          <View style={Styles.nav}>
            {cards.map((card, index) => {
              return (
                <View
                  key={index}
                  style={[
                    Styles.navContainer,
                    {
                      width: index == currentSlideIndex ? 40 : 8,
                      backgroundColor:
                        index == currentSlideIndex ? "#005B85" : "#90BDD0",
                    },
                  ]}
                ></View>
              );
            })}
          </View>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={Styles.subTitle}>Tes statistiques</Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={Styles.subTitle}>Notre sélection</Text>
          <FlatList
            style={{ overflow: "visible", marginHorizontal: 5 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={cards}
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
            data={cards}
            keyExtractor={(item) => "CardTop" + item.id}
            renderItem={({ item }) => <CardTopComponent item={item} />}
          />
        </View>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Button
          title="Go to Activity"
          onPress={() => navigation.navigate("Activity")}
        />
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate("Login")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
