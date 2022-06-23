import React, { useState, useRef } from "react";
import {
  View,
  Pressable,
  TextInput,
} from "react-native";
import Styles from "./style";
import SwipeUpDown from "react-native-swipe-up-down";
import Icon from "../CustomIcon";
import Filter from "./Filter"

export default function FilterComponent() {
  const [search, setSearch] = useState("");
  const [isFocusedEmail, setIsFocusedEmail] = useState({});
  const swipeUpDownRef = useRef();

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
            <Icon icon="time" size={20} color="#005B85" />
          </Pressable>
        </View>
        <Pressable
          style={Styles.filter}
          onPress={() => swipeUpDownRef.current.showFull()}
        >
          <Icon icon="time" size={20} color="#005B85" />
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
