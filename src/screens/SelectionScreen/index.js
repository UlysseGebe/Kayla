import React, { useState, useRef } from "react";
import {
  Image,
  FlatList,
  View,
  Pressable,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import NumericInput from "react-native-numeric-input";
import SelectMultiple from "react-native-select-multiple";
import Icon from "../../components/CustomIcon";

const { width, height } = Dimensions.get("window");

import slides from "./slides.js";
import Styles from "./style.js";

const Slide = ({ item }) => {
  const [selectedFruits, setselectedFruits] = useState([]);
  const onSelectionsChange = (fruits) => {
    setselectedFruits(fruits);
  };
  if (item.id == "1") {
    return (
      <View
        style={{ justifyContent: "flex-start", alignItems: "center", width: width }}
      >
        <View>
          <Text style={Styles.title}>{item.title}</Text>
        </View>
        <View style={Styles.inputInt}>
          <Text>Enfant(s) de 3 à 5 ans</Text>
          <NumericInput
            type="plus-minus"
            onChange={(value) => console.log(value)}
            minValue={0}
            rounded
            textColor="#005B85"
            iconStyle={{ color: "#3586AB" }}
            borderColor="transparent"
            leftButtonBackgroundColor="#E5EFF3"
            rightButtonBackgroundColor="#E5EFF3"
          />
        </View>
        <View style={Styles.inputInt}>
          <Text>Enfant(s) de 6 à 8 ans</Text>
          <NumericInput
            type="plus-minus"
            onChange={(value) => console.log(value)}
            minValue={0}
            rounded
            textColor="#005B85"
            iconStyle={{ color: "#3586AB" }}
            borderColor="transparent"
            leftButtonBackgroundColor="#E5EFF3"
            rightButtonBackgroundColor="#E5EFF3"
          />
        </View>
        <View style={Styles.inputInt}>
          <Text>Enfant(s) de 9 & plus</Text>
          <NumericInput
            type="plus-minus"
            onChange={(value) => console.log(value)}
            minValue={0}
            rounded
            textColor="#005B85"
            iconStyle={{ color: "#3586AB" }}
            borderColor="transparent"
            leftButtonBackgroundColor="#E5EFF3"
            rightButtonBackgroundColor="#E5EFF3"
          />
        </View>
      </View>
    );
  }
  if (item.id == "2") {
    return (
      <View
        style={{ justifyContent: "flex-start", alignItems: "center", width: width }}
      >
        <View>
          <Text style={Styles.title}>{item.title}</Text>
          <SelectMultiple
            items={item.activities}
            checkboxStyle={{ display: "none" }}
            flatListProps={{ numColumns: "2" }}
            labelStyle={{opacity: 0.5}}
            selectedLabelStyle={{opacity: 1, borderColor: "#005B85", borderWidth: 2}}
            rowStyle={{
              borderBottomColor: "transparent",
              backgroundColor: "transparent",
              padding: 0,
              justifyContent: "center",
            }}
            renderLabel={(label, style) => {
              return (
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={[style, { width: 165, height: 120, borderRadius: 15 }]}
                    source={label.image}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={[style, { borderWidth: 0 }]}>{label.name}</Text>
                  </View>
                </View>
              );
            }}
            selectedItems={selectedFruits}
            onSelectionsChange={onSelectionsChange}
          />
        </View>
      </View>
    );
  }
  if (item.id == "3") {
    return (
      <View
        style={{ justifyContent: "center", alignItems: "center", width: width }}
      >
        <View>
          <Text style={Styles.title}>{item.title}</Text>
          <Text style={Styles.subtitle}>{item.subtitle}</Text>
        </View>
      </View>
    );
  }
};

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
                <Text style={Styles.btnText}>S’inscrire</Text>
              </TouchableOpacity>
              <Text
                style={[
                  Styles.btn,
                  {
                    backgroundColor: "transparent",
                    paddingTop: 0,
                    paddingBottom: 0,
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
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};
export default SelectionScreen;
