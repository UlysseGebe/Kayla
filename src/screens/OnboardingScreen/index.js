import * as React from "react";
import { SafeAreaView, Image, Text, Pressable, View } from "react-native";
import Icon from "../../components/CustomIcon";
import Styles from "./style.js";

const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.main}>
      <Image
        source={require("../../assets/images/background.png")}
        style={Styles.background}
      />
      <View>
        <Text style={Styles.appTitle}>Bienvenue !</Text>
        <View style={Styles.kaylaCont}>
          <Icon style={Styles.kayla} icon="Kailya" size={81} color="#005B85" />
          <Text style={Styles.subTitle}> s’occupe de tout !</Text>
        </View>
        <Text style={Styles.text}>
          Nous trouvons pour vous l’activité sur mesure qu’il vous faut pour
          passer un moment incroyable et sans prise de tête avec vos enfants !
        </Text>
      </View>
      <View style={Styles.bottom}>
        <Pressable
          style={Styles.start}
          onPress={() => navigation.navigate("Selection")}
        >
          <Text style={Styles.startText}>Commencer</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={Styles.connection}
        >
          <Text style={Styles.connectionText}>Se connecter</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default OnboardingScreen;
