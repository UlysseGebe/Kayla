import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Button,
  Pressable,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import Icon from "../../components/CustomIcon";
import Styles from "./style";
import { initialWindowMetrics } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");

export default function ActivityEndScreen({ navigation }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  return (
    <SafeAreaView style={Styles.main}>
      <Image
        source={require("../../assets/images/background.png")}
        style={Styles.background}
      />
      <View style={Styles.top}>
        <View>
          <Pressable
            title="Retour"
            style={Styles.return}
            onPress={() => navigation.goBack()}
          >
            <Icon
              style={Styles.returnIcon}
              icon="fleche"
              size={30}
              color="#005B85"
            />
            <Text style={Styles.returnText}>Retour</Text>
          </Pressable>
        </View>
        <View>
          <Text style={Styles.title}>Title</Text>
        </View>
        <View>
          <Pressable
            title="Favorite"
            style={Styles.return}
            onPress={() => navigation.goBack()}
          >
            <Icon
              style={Styles.returnIcon}
              icon="star"
              size={40}
              color="#005B85"
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
