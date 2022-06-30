import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";
import {
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Text,
  View,
  Image,
  Modal,
  Dimensions,
} from "react-native";
import Icon from "../../components/CustomIcon";
import Styles from "./style";
import { initialWindowMetrics } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");

export default function ActivityEndScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setModalVisible(!modalVisible);
      setImage(result.uri);
    }
  };

  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
      setModalVisible(!modalVisible);
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView style={Styles.main}>
      <Image
        source={require("../../assets/images/background.png")}
        style={Styles.background}
      />
      <View>
        <Text style={Styles.title}>Bravo</Text>
        <Text style={Styles.subtitle}>Vous avez terminé l’activité</Text>
        <Text style={Styles.text}>
          Vous pouvez prendre en photo votre activité ou cliquer sur le bouton
          “Terminer” pour revenir à la page d’accueil
        </Text>
        <Pressable
          style={Styles.imgContainer}
          onPress={() => setModalVisible(true)}
        >
          <Text style={Styles.imgText}>Choisir l’image à mettre ici</Text>
          {image && <Image source={{ uri: image }} style={Styles.img} />}
        </Pressable>
        <Pressable style={Styles.finish} onPress={()=>{navigation.navigate('HomeTab')}}>
          <Text style={Styles.finishText}>Terminer</Text>
        </Pressable>
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
            <View style={Styles.modalButtons}>
              <TouchableOpacity
                style={[Styles.modalButton, Styles.modalButtonClose]}
                onPress={openCamera}
              >
                <Text style={Styles.modalButtonText}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[Styles.modalButton, Styles.modalButtonClose]}
                onPress={pickImage}
              >
                <Text style={Styles.modalButtonText}>Galery</Text>
              </TouchableOpacity>
            </View>
            <Pressable
              style={Styles.modalButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={[Styles.modalButtonText, { color: "#005B85" }]}>
                Annuler
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
