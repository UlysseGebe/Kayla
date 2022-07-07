import React, { useState, useRef } from "react";
import {
  Text,
  View,
  FlatList,
  Dimensions,
} from "react-native";
const { width } = Dimensions.get("window");
import Styles from "./style";
import CardMainComponent from "../../components/CardMainComponent";

export default function Section({ activity }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  return (
    <View>
      <Text style={Styles.subTitle}>Ton activité du jour !</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        horizontal
        data={activity}
        keyExtractor={(item) => "CardMain" + item.id}
        renderItem={({ item }) => <CardMainComponent item={item} />}
      />
      <View style={Styles.nav}>
        {["", "", "", ""].map((card, index) => {
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
  );
}
