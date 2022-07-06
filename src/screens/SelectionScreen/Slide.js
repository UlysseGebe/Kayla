import React, { useState, useEffect } from "react";
import { Image, View, Text, Dimensions } from "react-native";
import NumericInput from "react-native-numeric-input";
import SelectMultiple from "react-native-select-multiple";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("window");

import Styles from "./style.js";

const Slide = ({ item, index }) => {
  const [selectedChild, setSelectedChild] = useState([]);
  const [child3to5, setChild3to5] = useState(0);
  const [child6to8, setChild6to8] = useState(0);
  const [child9to, setChild9to] = useState(0);

  if (item.id == "1") {
    return (
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          width: width,
        }}
      >
        <View>
          <Text style={Styles.title}>{item.title}</Text>
        </View>
        <View style={Styles.inputInt}>
          <Text>Enfant(s) de 3 à 5 ans</Text>
          <NumericInput
            type="plus-minus"
            onChange={(value) => {
              setChild3to5(value);
              AsyncStorage.setItem("child3to5", JSON.stringify(value));
            }}
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
            onChange={(value) => {
              setChild6to8(value);
              AsyncStorage.setItem("child6to8", JSON.stringify(value));
            }}
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
            onChange={(value) => {
              setChild9to(value);
              AsyncStorage.setItem("child9to", JSON.stringify(value));
            }}
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
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          width: width,
        }}
      >
        <View>
          <Text style={Styles.title}>{item.title}</Text>
          <SelectMultiple
            items={item.activities}
            checkboxStyle={{ display: "none" }}
            flatListProps={{ numColumns: "2" }}
            labelStyle={{ opacity: 0.5 }}
            selectedLabelStyle={{
              opacity: 1,
              borderColor: "#005B85",
              borderWidth: 2,
            }}
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
                    style={[
                      style,
                      { width: 165, height: 120, borderRadius: 15 },
                    ]}
                    source={label.image}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={[style, { borderWidth: 0 }]}>
                      {label.name}
                    </Text>
                  </View>
                </View>
              );
            }}
            selectedItems={selectedChild}
            onSelectionsChange={(value) => {
              setSelectedChild(value);
              AsyncStorage.setItem("selectedChild", JSON.stringify(value));
            }}
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
        <View style={{ paddingHorizontal: 16 }}>
          <Text style={Styles.title}>{item.title}</Text>
          <Text style={Styles.subtitle}>{item.subtitle}</Text>
        </View>
      </View>
    );
  }
};

export default Slide;
