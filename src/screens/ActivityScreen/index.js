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

const slides = [
  {
    id: 0,
    name: "test1",
    image: require("../../assets/images/previewImage.png"),
  },
  {
    id: 1,
    name: "test2",
    image: require("../../assets/images/previewImage.png"),
  },
  {
    id: 2,
    name: "test3",
    image: require("../../assets/images/previewImage.png"),
  },
  {
    id: 3,
    name: "test4",
    image: require("../../assets/images/previewImage.png"),
  },
];

const items = [
  {
    id: 0,
    name: "test1",
    image: require("../../assets/images/mat.png"),
  },
  {
    id: 1,
    name: "test2",
    image: require("../../assets/images/mat.png"),
  },
  {
    id: 2,
    name: "test3",
    image: require("../../assets/images/mat.png"),
  },
  {
    id: 3,
    name: "test4",
    image: require("../../assets/images/mat.png"),
  },
];

const Slide = ({ item }) => {
  return (
    <View>
      <View>
        <Image source={item.image} />
      </View>
    </View>
  );
};

const Item = ({ item }) => {
  return (
    <View style={{ width: 103, marginBottom: 16 }}>
      <Image source={item.image} style={{ width: 103, height: 48}}/>
      <Text>item.name</Text>
    </View>
  );
};

export default function ActivityScreen({ navigation }) {
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
      <View style={{ marginTop: 25, width: "100%", justifyContent: "center" }}>
        <FlatList
          ref={ref}
          style={{
            width: 343,
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 12,
          }}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          showsHorizontalScrollIndicator={false}
          contentContainerStyles={{ width: "100%" }}
          scrollEnabled={true}
          horizontal
          data={slides}
          pagingEnabled={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Slide item={item} />}
        />
      </View>
      <View style={Styles.statContainer}>
        <View style={Styles.stat}>
          <Icon style={Styles.statIcon} icon="eye" size={22} color="#005B85" />
          <Text style={Styles.statText}>30 min</Text>
        </View>
        <View style={Styles.stat}>
          <Icon style={Styles.statIcon} icon="eye" size={22} color="#005B85" />
          <Text style={Styles.statText}>3 à 10 ans</Text>
        </View>
        <View style={Styles.stat}>
          <Icon style={Styles.statIcon} icon="eye" size={22} color="#005B85" />
          <Text style={Styles.statText}>10 euros</Text>
        </View>
      </View>
      <View style={Styles.descriptionContainer}>
        <Text style={Styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
      <View style={Styles.matContainer}>
        <Text>Matériel nécessaire</Text>
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          data={items}
          numColumns={3}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item item={item} />}
        />
      </View>
      <View>
      <Pressable
          style={Styles.start}
          mode="contained"
          onPress={() => navigation.navigate("Steps", {itemId: 0})}
        >
          <Text style={Styles.startText}>Commencer l’activité</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
