import * as React from "react";
import { SafeAreaView, Image, Text, Pressable, View } from "react-native";

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
        <Text style={Styles.subTitle}>Kayla s’occupe de tout !</Text>
        <Text style={Styles.text}>
          Nous trouvons pour vous l’activité sur mesure qu’il vous faut pour
          passer un moment incroyable et sans prise de tête avec vos enfants !
        </Text>
      </View>
      <View style={Styles.bottom}>
        <Pressable style={Styles.start} onPress={() => navigation.navigate('Selection')}>
          <Text style={Styles.startText}>Commencer</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Login')}
          style={Styles.connection}
        >
          <Text style={Styles.connectionText}>Se connecter</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default OnboardingScreen;
