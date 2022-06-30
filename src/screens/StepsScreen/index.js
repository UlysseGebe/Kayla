import React, { useState, useRef, useEffect } from "react";
import {
  Image,
  FlatList,
  View,
  Pressable,
  Text,
  Modal,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import axios from "axios";
import Icon from "../../components/CustomIcon";

const { width, height } = Dimensions.get("window");

// import slides from "./slides.js";
import Styles from "./style.js";

const Slide = ({ item }) => {
  return (
    <View
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        width: width,
        padding: 16,
      }}
    >
      <View>
        {/* <Image source={item.image} /> */}
        <Text>{item.text}</Text>
      </View>
    </View>
  );
};

const StepsScreen = ({ route, navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [activity, setActivity] = useState("");
  const [slides, setSlides] = useState([]);
  const ref = useRef();
  const { itemId } = route.params;

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToSlide = (id) => {
    if (id - currentSlideIndex != 0) {
      const offset = id * width;
      setCurrentSlideIndex(id);
      ref?.current.scrollToOffset({ offset });
    }
  };

  const goToPrevSlide = () => {
    const prevSlideIndex = currentSlideIndex - 1;
    if (prevSlideIndex != slides.length) {
      const offset = prevSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    const url = "https://kayla-project.herokuapp.com/api/activities/";
    const fetchAdvice = async () => {
      try {
        const response = await axios.get(url + itemId + "?populate=Steps");
        if (response.status === 200) {
          setActivity(response.data.data);
          setSlides(response.data.data.Steps)
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FDFF" }}>
      <Image
        source={require("../../assets/images/background.png")}
        style={Styles.background}
      />
      <View style={Styles.top}>
        <View>
          <Pressable
            title="Retour"
            style={Styles.return}
            onPress={
              currentSlideIndex == 0
                ? () => setModalVisible(true)
                : goToPrevSlide
            }
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
      <View style={Styles.nav}>
        {slides.map((slide, index) => {
          return (
            <View key={index} style={Styles.navContainer}>
              {index == 0 ? null : (
                <Text
                  style={[
                    Styles.navTrait,
                    {
                      width: width / slides.length - 30,
                      backgroundColor:
                        index <= currentSlideIndex ? "#005B85" : "#AECCDA",
                    },
                  ]}
                ></Text>
              )}
              <Pressable
                onPress={() => goToSlide(index)}
                style={[
                  Styles.navNumberContainer,
                  {
                    borderColor:
                      index <= currentSlideIndex ? "#005B85" : "#AECCDA",
                    backgroundColor:
                      index <= currentSlideIndex ? "#005B85" : "transparent",
                  },
                ]}
              >
                <Text
                  style={[
                    Styles.navNumber,
                    {
                      color: index <= currentSlideIndex ? "#FFF" : "#AECCDA",
                    },
                  ]}
                >
                  {index + 1}
                </Text>
              </Pressable>
            </View>
          );
        })}
      </View>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyles={{ height: height * 0.8 }}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        horizontal
        data={slides}
        pagingEnabled
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <View
        style={{
          height: height * 0.1,
          justifyContent: "center",
          paddingHorizontal: 20,
        }}
      >
        {/* Render buttons */}
        <View style={{ marginBottom: 20 }}>
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={Styles.btn}
              onPress={
                currentSlideIndex == slides.length - 1
                  ? () => navigation.navigate("ActivityEnd", { itemId: 0 })
                  : goToNextSlide
              }
            >
              <Text style={Styles.btnText}>
                {currentSlideIndex == slides.length - 1
                  ? "Terminer l’activité"
                  : "Prochaine étape"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <Text style={Styles.modalText}>Quitter l’activité</Text>
            <Text style={Styles.modalText}>
              Si vous confirmez, vous reviendrez à la page de l’activité
            </Text>
            <View style={Styles.modalButtons}>
              <Pressable
                style={Styles.modalButton}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={[Styles.modalButtonText, { color: "#005B85" }]}>
                  Annuler
                </Text>
              </Pressable>
              <Pressable
                style={[Styles.modalButton, Styles.modalButtonClose]}
                onPress={() => navigation.goBack()}
              >
                <Text style={Styles.modalButtonText}>Je confirme</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
export default StepsScreen;
