import React, { useState, useRef, useEffect } from "react";
import {
  Image,
  FlatList,
  View,
  Pressable,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "../../components/CustomIcon";
import Slide from "./Slide";

const { width, height } = Dimensions.get("window");

import slides from "./slides.js";
import Styles from "./style.js";

const SelectionScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
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

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Header = () => {
    return (
      <View style={Styles.top}>
        <View style={Styles.topContent}>
          <Pressable
            title="Retour"
            style={Styles.return}
            onPress={
              currentSlideIndex == 0 ? () => navigation.goBack() : goToPrevSlide
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
      </View>
    );
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.1,
          justifyContent: "center",
          paddingHorizontal: 20,
        }}
      >
        {/* Render buttons */}
        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={Styles.btn}
                onPress={() => navigation.replace("Register")}
              >
                <Text style={Styles.btnText}>S'inscrire</Text>
              </TouchableOpacity>
              <Text
                style={[
                  Styles.btn,
                  {
                    backgroundColor: "transparent",
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginBottom: 28,
                  },
                ]}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "#005B85",
                    textAlign: "center",
                  }}
                >
                  &nbsp;
                </Text>
              </Text>
            </View>
          ) : (
            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={Styles.btn}
              >
                <Text style={Styles.btnText}>Suivant</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  Styles.btn,
                  {
                    backgroundColor: "transparent",
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginBottom: 28,
                  },
                ]}
                onPress={skip}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    fontFamily: "Avenir",
                    color: "#005B85",
                    textAlign: "center",
                  }}
                >
                  Passer la question
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FDFF" }}>
      <Image
        source={require("../../assets/images/background.png")}
        style={Styles.background}
      />
      <Header />
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
        renderItem={({ item }) => (
          <Slide item={item} index={currentSlideIndex} />
        )}
      />
      <Footer />
    </SafeAreaView>
  );
};
export default SelectionScreen;
