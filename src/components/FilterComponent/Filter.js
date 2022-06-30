import React, { useState, useRef } from "react";
import {
  View,
  ScrollView,
  FlatList,
  Text,
  Pressable,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import Styles from "./style";
import Obj from "./Object";
// import Icon from "../CustomIcon";
import { List } from "react-native-paper";
import SelectMultiple from "react-native-select-multiple";
import NumericInput from "react-native-numeric-input";
import SwipeUpDown from "react-native-swipe-up-down";
const { width } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";

export default function FilterComponent() {
  const [expandedAge, setExpandedAge] = useState(false);
  const [expandedPrice, setExpandedPrice] = useState(false);
  const [expandedTime, setExpandedTime] = useState(false);
  const [expandedType, setExpandedType] = useState(false);
  const [expandedPlace, setExpandedPlace] = useState(false);

  const [child3to5, setChild3to5] = useState(0);
  const [child6to8, setChild6to8] = useState(0);
  const [child9to, setChild9to] = useState(0);

  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedTime, setSelectedTime] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState([]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();
  const swipe = useRef();
  const navigation = useNavigation();

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToSlide = (id) => {
    const offset = id * width;
    setCurrentSlideIndex(id);
    ref?.current.scrollToOffset({ offset });
  };

  const Btn3 = (label, style) => {
    return (
      <View style={[Styles.btn3, style]}>
        <Text style={[Styles.btnText, style]}>{label}</Text>
      </View>
    );
  };

  const Btn2 = (label, style) => {
    return (
      <View style={[Styles.btn2, style]}>
        <Text style={[Styles.btnText, style]}>{label}</Text>
      </View>
    );
  };

  const Content = ({ item }) => {
    if (item.id == 0)
      return (
        <ScrollView style={Styles.listContainer}>
          <TouchableWithoutFeedback>
            <>
              <List.Section>
                <List.Accordion
                  title="Âge des enfants"
                  expanded={expandedAge}
                  onPress={() => setExpandedAge(!expandedAge)}
                >
                  <List.Item
                    title="Enfant(s) de 3 à 5 ans"
                    right={(props) => (
                      <NumericInput
                        value={child3to5}
                        onChange={(value) => {
                          setChild3to5(value);
                        }}
                        type="plus-minus"
                        minValue={0}
                        rounded
                        textColor="#005B85"
                        iconStyle={{ color: "#3586AB" }}
                        borderColor="transparent"
                        leftButtonBackgroundColor="#E5EFF3"
                        rightButtonBackgroundColor="#E5EFF3"
                      />
                    )}
                  />
                  <List.Item
                    title="Enfant(s) de 6 à 8 ans "
                    right={(props) => (
                      <NumericInput
                        value={child6to8}
                        onChange={(value) => {
                          setExpandedAge(true);
                          setChild6to8(value);
                        }}
                        type="plus-minus"
                        minValue={0}
                        rounded
                        textColor="#005B85"
                        iconStyle={{ color: "#3586AB" }}
                        borderColor="transparent"
                        leftButtonBackgroundColor="#E5EFF3"
                        rightButtonBackgroundColor="#E5EFF3"
                      />
                    )}
                  />
                  <List.Item
                    title="Enfant(s) de 9 ans & plus "
                    right={(props) => (
                      <NumericInput
                        value={child9to}
                        onChange={(value) => {
                          setExpandedAge(true);
                          setChild9to(value);
                        }}
                        type="plus-minus"
                        minValue={0}
                        rounded
                        textColor="#005B85"
                        iconStyle={{ color: "#3586AB" }}
                        borderColor="transparent"
                        leftButtonBackgroundColor="#E5EFF3"
                        rightButtonBackgroundColor="#E5EFF3"
                      />
                    )}
                  />
                </List.Accordion>

                <List.Accordion
                  title="Budget"
                  expanded={expandedPrice}
                  onPress={() => setExpandedPrice(!expandedPrice)}
                >
                  <List.Item
                    title={(props) => (
                      <SelectMultiple
                        items={["Gratuit", "10 €", "20 €"]}
                        checkboxStyle={{ display: "none" }}
                        flatListProps={{ numColumns: "3" }}
                        selectedLabelStyle={{
                          backgroundColor: "#005B85",
                          color: "white",
                        }}
                        rowStyle={{
                          borderBottomColor: "transparent",
                          backgroundColor: "transparent",
                          padding: 0,
                          justifyContent: "center",
                        }}
                        renderLabel={Btn3}
                        selectedItems={selectedPrice}
                        onSelectionsChange={(value) => {
                          setSelectedPrice(value);
                        }}
                      />
                    )}
                  />
                </List.Accordion>

                <List.Accordion
                  title="Temps de l’activité"
                  expanded={expandedTime}
                  onPress={() => setExpandedTime(!expandedTime)}
                >
                  <List.Item
                    title={(props) => (
                      <SelectMultiple
                        items={["30 min", "1h", "1h30", "2h", "3h", "+ 3h"]}
                        checkboxStyle={{ display: "none" }}
                        flatListProps={{ numColumns: "3" }}
                        selectedLabelStyle={{
                          backgroundColor: "#005B85",
                          color: "white",
                        }}
                        rowStyle={{
                          borderBottomColor: "transparent",
                          backgroundColor: "transparent",
                          padding: 0,
                          marginVertical: 6,
                          justifyContent: "center",
                        }}
                        renderLabel={Btn3}
                        selectedItems={selectedTime}
                        onSelectionsChange={(value) => {
                          setSelectedTime(value);
                        }}
                      />
                    )}
                  />
                </List.Accordion>

                <List.Accordion
                  title="Type d’activité"
                  expanded={expandedType}
                  onPress={() => setExpandedType(!expandedType)}
                >
                  <List.Item
                    title={(props) => (
                      <SelectMultiple
                        items={[
                          "Créative",
                          "Manuelle",
                          "Sportive",
                          "Éducative",
                          "Amusante",
                          "Jeu de société",
                        ]}
                        checkboxStyle={{ display: "none" }}
                        flatListProps={{ numColumns: "2" }}
                        selectedLabelStyle={{
                          backgroundColor: "#005B85",
                          color: "white",
                        }}
                        rowStyle={{
                          borderBottomColor: "transparent",
                          backgroundColor: "transparent",
                          padding: 0,
                          marginVertical: 6,
                          justifyContent: "center",
                        }}
                        renderLabel={Btn2}
                        selectedItems={selectedType}
                        onSelectionsChange={(value) => {
                          setSelectedType(value);
                        }}
                      />
                    )}
                  />
                </List.Accordion>

                <List.Accordion
                  title="Lieu de l’activité"
                  expanded={expandedPlace}
                  onPress={() => setExpandedPlace(!expandedPlace)}
                >
                  <List.Item
                    title={(props) => (
                      <SelectMultiple
                        items={["Intérieur", "Extérieur"]}
                        checkboxStyle={{ display: "none" }}
                        flatListProps={{ numColumns: "2" }}
                        selectedLabelStyle={{
                          backgroundColor: "#005B85",
                          color: "white",
                        }}
                        rowStyle={{
                          borderBottomColor: "transparent",
                          backgroundColor: "transparent",
                          padding: 0,
                          marginVertical: 6,
                          justifyContent: "center",
                        }}
                        renderLabel={Btn2}
                        selectedItems={selectedPlace}
                        onSelectionsChange={(value) => {
                          setSelectedPlace(value);
                        }}
                      />
                    )}
                  />
                </List.Accordion>
              </List.Section>
            </>
          </TouchableWithoutFeedback>
        </ScrollView>
      );
    if (item.id == 1)
      return (
        <View style={Styles.listContainer}>
          <FlatList
            data={[]}
            ListEmptyComponent={() => (
              <View>
                <Pressable
                  style={Styles.object}
                  onPress={() => swipe.current.showFull()}
                >
                  <Text style={Styles.objectP}>+</Text>
                </Pressable>
                <Text style={Styles.objectText}>Ajouter un objet</Text>
              </View>
            )}
            renderItem={({ item, index, separators }) => (
              <View style={{ backgroundColor: "white" }}>
                <Text>{item.title}</Text>
              </View>
            )}
          />
          <SwipeUpDown
            animation="spring"
            disableSwipeIcon
            extraMarginTop={0}
            iconColor="yellow"
            iconSize={30}
            style={{ backgroundColor: "white" }}
            itemFull={() => <Obj />}
            ref={swipe}
          />
        </View>
      );
  };

  return (
    <View style={Styles.swipeContainer}>
      <View style={Styles.head}></View>
      <View style={Styles.header}>
        <Pressable onPress={() => goToSlide(0)}>
          <Text style={Styles.headerText}>Filtre</Text>
        </Pressable>
        <Pressable onPress={() => goToSlide(1)}>
          <Text style={Styles.headerText}>Conciergerie</Text>
        </Pressable>
      </View>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        horizontal
        data={[{ id: 0 }, { id: 1 }]}
        pagingEnabled
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Content item={item} />}
      />
      <Pressable style={Styles.btnSearch} onPress={() => navigation.navigate("Search")}>
        <Text style={Styles.btnSearchText}>Rechercher</Text>
      </Pressable>
    </View>
  );
}
