import React, { useState, useRef, useEffect } from "react";
import { View, Pressable, TextInput, TouchableWithoutFeedback } from "react-native";
import Styles from "./style";
import SwipeUpDown from "react-native-swipe-up-down";
import Icon from "../CustomIcon";
import Filter from "./Filter";

export default function FilterComponent({ openFilter }) {
  const [search, setSearch] = useState("");
  const [isFocusedEmail, setIsFocusedEmail] = useState({});
  const swipeUpDownRef = useRef();

  useEffect(() => {
    if (openFilter) {
      swipeUpDownRef.current.showFull();
    }
  });

  return (
    <View style={Styles.container}>
      <View style={Styles.content}>
        <View style={Styles.inputContainer}>
          <TextInput
            style={[Styles.input, isFocusedEmail]}
            onChangeText={(text) => setSearch(text)}
            onFocus={() => setIsFocusedEmail(Styles.input_focused)}
            onBlur={() => setIsFocusedEmail({})}
            label="search"
            textContentType="emailAddress"
            placeholder="Rechercher une activité"
            placeholderTextColor="#AECCDA"
          >
            {search}
          </TextInput>
          <Pressable style={Styles.loupeContainer}>
            <Icon icon="loupe" size={20} color="#005B85" />
          </Pressable>
        </View>
        <Pressable
          style={Styles.filter}
          onPress={() => swipeUpDownRef.current.showFull()}
        >
          <Icon icon="filtre" size={20} color="#005B85" />
        </Pressable>
      </View>
        <SwipeUpDown
          animation="spring"
          disableSwipeIcon
          extraMarginTop={50}
          iconColor="yellow"
          iconSize={30}
          style={{ backgroundColor: "white" }}
          itemFull={<Filter />}
          ref={swipeUpDownRef}
        />
    </View>
  );
}
