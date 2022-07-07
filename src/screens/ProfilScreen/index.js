import React, { useState } from "react";
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
const { width } = Dimensions.get("window");
import Styles from "./style";
import CardSmallComponent from "../../components/CardSmallComponent";
import UserModel from "../../models/UserModel";
import { store } from "../../redux/Store";
import Data from "./price";

const cards = [{ id: 0 }, { id: 2 }, { id: 3 }, { id: 4 }];

const Content = ({ item }) => {
  const SelectOffer = async () => {
    const user = new UserModel();
    try {
      await user.update({ payed: true });
    } catch (err) {
      console.log(err);
    }
  };
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

export default function ProfilScreen({ navigation }) {
  const logout = async () => {
    const user = new UserModel();
    user.logout();
    navigation.replace("Home");
  };

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
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
      <ScrollView>
        <View style={{ flexDirection: "column" }}>
          <Text style={Styles.subTitle}>Activités réalisés</Text>
          <FlatList
            style={{ overflow: "visible", marginHorizontal: 5 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={cards}
            keyExtractor={(item) => "CardSmall" + item.id}
            renderItem={({ item }) => <CardSmallComponent item={item} />}
          />
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
        {store.getState().jwt ? (
          <Button title="Logout" onPress={() => logout()} />
        ) : (
          <Button title="Login" onPress={() => navigation.navigate("Login")} />
        )}
        <View style={{ height: 100 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
