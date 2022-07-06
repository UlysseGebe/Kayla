import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Pressable,
  FlatList,
  Text,
  Image,
  Dimensions,
} from "react-native";
import { Paragraph, List } from "react-native-paper";
import Icon from "../../components/CustomIcon";
import { store } from "../../redux/Store";
const { width } = Dimensions.get("window");
import Styles from "./style";
import Data from "./price";

const Content = ({ item }) => {
  const SelectOffer = async () => {
    
  }
  return (
    <View style={Styles.itemContainer}>
      <View style={Styles.itemContent}>
        <Text style={Styles.itemPrice}>{item.price}</Text>
        <View>
          {item.text.map((line, index) => {
            return (
              <View key={index}>
                <Text style={Styles.itemList}>•&nbsp;&nbsp;{line}</Text>
              </View>
            );
          })}
        </View>
        <Pressable style={Styles.itemBtn} onPress={() => SelectOffer()}>
          <Text style={Styles.itemBtnText}>{item.btn}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default function PayScreen({ navigation }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
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
        <Pressable
          title="Retour"
          style={Styles.return}
          onPress={() => navigation.navigate("Register")}
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

      <View style={Styles.header}>
        <Text style={Styles.appTitle}>Nos offres</Text>
        <Paragraph style={Styles.appDesc}>
          Choisis notre offre mensuelle ou annuelle pour utiliser pleinement
          notre application
        </Paragraph>
      </View>
      <View style={{ position: "relative" }}>
        <FlatList
          onMomentumScrollEnd={updateCurrentSlideIndex}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
          horizontal
          data={Data}
          pagingEnabled
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Content item={item} />}
        />
        <View style={Styles.nav}>
            {Data.map((item, index) => {
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
      <View style={Styles.footer}>
        <Pressable onPress={() => {navigation.navigate("Home")}}>
          <Text style={Styles.footerText}>Peut-être plus tard</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
