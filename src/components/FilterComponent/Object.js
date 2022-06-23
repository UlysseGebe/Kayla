import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
} from "react-native";
import Styles from "./style";

export default function Obj() {
  const [isFocusedObject, setIsFocusedObject] = useState(Styles.inputObject);
  const [object, setObject] = useState();

  return (
    <View style={Styles.objectContainer}>
      <View style={Styles.head}></View>
      <Text>Ajouter un objet</Text>
      <TextInput
        style={[Styles.inputObject, isFocusedObject]}
        onChangeText={(text) => setObject(text)}
        onFocus={() => setIsFocusedObject(Styles.input_focusedObject)}
        onBlur={() => setIsFocusedObject({})}
        label="object"
        textContentType="emailAddress"
        placeholder="Rechercher une activité"
        placeholderTextColor="#AECCDA"
      >
        {object}
      </TextInput>
    </View>
  );
}
