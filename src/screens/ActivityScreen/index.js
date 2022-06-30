import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  Pressable,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import axios from "axios";
import Icon from "../../components/CustomIcon";
import Styles from "./style";

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

const Slide = ({ item }) => {
  return (
    <View>
      <View>
        <Image
          source={
            item.url
              ? { uri: `https://kayla-project.herokuapp.com${item.url}` }
              : item.image
          }
          style={{ width: 343, height: 200 }}
        />
      </View>
    </View>
  );
};

const Item = ({ item }) => {
  return (
    <View
      style={{
        width: 103,
        marginBottom: 16,
        marginRight: 8,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../assets/images/mat.png")}
        style={{ width: 103, height: 48 }}
      />
      <Text style={{ width: 80, textAlign: "center" }}>{item.name}</Text>
    </View>
  );
};

export default function ActivityScreen({ route, navigation }) {
  const [activity, setActivity] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const ref = useRef();
  const { itemId } = route.params;

  useEffect(() => {
    const source = axios.CancelToken.source();
    const url = "https://kayla-project.herokuapp.com/api/activities/";
    const fetchAdvice = async () => {
      try {
        const response = await axios.get(url + itemId + "?populate=*");
        if (response.status === 200) {
          setActivity(response.data.data);
          response.data.data.range.forEach((element) => {
            if (element.__component == "range.price") {
              setPrice(element);
            }
            if (element.__component == "range.duration") {
              setDuration(element);
            }
          });
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
  }, [activity, itemId]);

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
          <Text style={Styles.title}>{activity.name}</Text>
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
      <ScrollView nestedScrollEnabled={true} style={{ width: "100%" }}>
        <TouchableWithoutFeedback>
          <View style={{ marginTop: 25 }}>
            <View style={{ width: "100%", justifyContent: "center" }}>
              <FlatList
                ref={ref}
                style={{
                  width: 343,
                  marginLeft: "auto",
                  marginRight: "auto",
                  borderRadius: 12,
                }}
                showsHorizontalScrollIndicator={false}
                contentContainerStyles={{ width: "100%" }}
                scrollEnabled={true}
                horizontal
                data={activity.thumbnail ? [activity.thumbnail] : slides}
                pagingEnabled={true}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Slide item={item} />}
              />
            </View>
            <View style={Styles.statContainer}>
              <View style={Styles.stat}>
                <Icon
                  style={Styles.statIcon}
                  icon="eye"
                  size={22}
                  color="#005B85"
                />
                <Text style={Styles.statText}>
                  {duration.maximum || duration.minimum} min
                </Text>
              </View>
              <View style={Styles.stat}>
                <Icon
                  style={Styles.statIcon}
                  icon="eye"
                  size={22}
                  color="#005B85"
                />
                <Text style={Styles.statText}>3 à 10 ans</Text>
              </View>
              <View style={Styles.stat}>
                <Icon
                  style={Styles.statIcon}
                  icon="eye"
                  size={22}
                  color="#005B85"
                />
                <Text style={Styles.statText}>
                  {price.maximum || price.minimum} euros
                </Text>
              </View>
            </View>
            {activity.description ? (
              <View style={Styles.descriptionContainer}>
                <Text style={Styles.description}>{activity.description}</Text>
              </View>
            ) : null}
            <View style={Styles.matContainer}>
              <Text>Matériel nécessaire</Text>
              <ScrollView horizontal={true} style={{ width: "100%" }}>
                <FlatList
                  columnWrapperStyle={{ justifyContent: "space-around" }}
                  data={activity.materials}
                  style={{ width: "100%" }}
                  numColumns={3}
                  scrollEnabled={false}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => <Item item={item} />}
                />
              </ScrollView>
            </View>
            <View>
              <Pressable
                style={Styles.start}
                mode="contained"
                onPress={() => navigation.navigate("Steps", { itemId: itemId })}
              >
                <Text style={Styles.startText}>Commencer l’activité</Text>
              </Pressable>
            </View>
            <View style={{ height: 100 }}></View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
}
