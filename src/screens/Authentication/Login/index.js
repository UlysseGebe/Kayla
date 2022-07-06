import React, { useState } from "react";
import {
  View,
  StatusBar,
  Pressable,
  TextInput,
  Text,
  Image,
} from "react-native";
import {
  Headline,
  Paragraph,
  Button,
  Snackbar,
  Portal,
} from "react-native-paper";
import UserModel from "../../../models/UserModel";
import useTogglePasswordVisibility from "../useTogglePasswordVisibility";
import Icon from "../../../components/CustomIcon";
import Styles from "./style";

const Login = ({ navigation }) => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(Styles.input);
  const [isFocusedPWD, setIsFocusedPWD] = useState(Styles.input);

  const validateInput = () => {
    let errors = false;

    if (!identifier || identifier.length === 0) {
      errors = true;
    }

    if (!password || password.length === 0) {
      errors = true;
    }

    return !errors;
  };

  const authenticateUser = async () => {
    if (validateInput()) {
      setLoading(true);
      const user = new UserModel(identifier, password);

      try {
        await user.login();
        navigation.navigate("Home");
      } catch (err) {
        setError("Email ou mot de passe invalide");
        setVisible(true);
        setLoading(false);
      }
    } else {
      setError("Please fill out all * required fields");
      setVisible(true);
      setLoading(false);
    }
  };

  return (
    <View style={Styles.base}>
      <Image
        source={require("../../../assets/images/background.png")}
        style={Styles.background}
      />
      <View style={Styles.top}>
        <Pressable
          title="Retour"
          style={Styles.return}
          onPress={() => navigation.goBack()}
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

      <View style={Styles.header}>
        <Headline style={Styles.appTitle}>Se connecter</Headline>
        <Paragraph style={Styles.appDesc}>
          Entrez votre adresse mail et votre mot de passe pour vous connecter
        </Paragraph>
      </View>

      <>
        <View style={Styles.divider} />
        <TextInput
          style={isFocusedEmail}
          onChangeText={(text) => setIdentifier(text)}
          onFocus={() => setIsFocusedEmail(Styles.input_focused)}
          onBlur={() => setIsFocusedEmail(Styles.input)}
          label="Adresse mail"
          autoComplete="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="Adresse mail"
          placeholderTextColor="#AECCDA"
        >
          {identifier}
        </TextInput>
      </>

      <>
        <View style={Styles.divider} />
        <View style={Styles.inputPwdContainer}>
          <TextInput
            style={isFocusedPWD}
            onChangeText={(text) => setPassword(text)}
            onFocus={() => setIsFocusedPWD(Styles.input_focused)}
            onBlur={() => setIsFocusedPWD(Styles.input)}
            label="Mot de passe"
            placeholder="Mot de passe"
            autoComplete="password"
            textContentType="password"
            placeholderTextColor="#AECCDA"
            secureTextEntry={passwordVisibility}
          >
            {password}
          </TextInput>
          <Pressable onPress={handlePasswordVisibility} style={Styles.inputEye}>
            <Icon icon={rightIcon} size={22} color="#90BDD0" />
          </Pressable>
        </View>
      </>

      <>
        <View style={Styles.divider} />
        <Pressable
          loading={loading}
          disabled={!(identifier && password)}
          style={[
            Styles.connexion,
            {
              backgroundColor: !(identifier && password)
                ? "#90BDD0"
                : "#005B85",
            },
          ]}
          onPress={() => authenticateUser()}
          mode="contained"
        >
          <Text style={Styles.connexionText}>Connexion</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={Styles.lost}
        >
          <Text style={Styles.lostText}>Mot de passe oublié ?</Text>
        </Pressable>
      </>

      <>
        {/**
         * We use a portal component to render
         * the snackbar on top of everything else
         * */}
        <Portal>
          <Snackbar visible={visible} onDismiss={() => setVisible(false)}>
            {error}
          </Snackbar>
        </Portal>
      </>
    </View>
  );
};

export default Login;
