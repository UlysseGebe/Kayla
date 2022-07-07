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
import CardSmallComponent from "../../components/CardSmallComponent";
// import BadgeComponent from "../../components/BadgeComponent";
import UserModel from "../../models/UserModel";
import { store } from "../../redux/Store";

const cards = [{ id: 0 }, { id: 2 }, { id: 3 }, { id: 4 }];

export default function HomeScreen({ navigation }) {
  const logout = async () => {
    const user = new UserModel();
    let response = user.logout();
    if (response) {
      navigation.navigate("Home")
    }
  };
  return (
    <SafeAreaView style={Styles.container}>
      <Image
        source={require("../../assets/images/background.png")}
        style={Styles.background}
      />
      <ScrollView>
        <View style={{ flexDirection: "column" }}>
          <Text style={Styles.subTitle}>Tes statistiques</Text>
        </View>
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
        <Text></Text>
        <StatusBar style="auto" />
        {store.getState().jwt ? (
          <Button title="Logout" onPress={() => logout()} />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}
