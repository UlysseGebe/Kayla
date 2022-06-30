import React, { useState } from "react";
import {
  View,
  Pressable,
  TextInput,
  Text,
  Image,
} from "react-native";
import {
  Paragraph,
  Snackbar,
  Portal,
} from "react-native-paper";
import UserModel from "../../../models/UserModel";
import useTogglePasswordVisibility from "../useTogglePasswordVisibility";
import Icon from "../../../components/CustomIcon";
import Styles from "./style";

const Register = ({ navigation }) => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [name, setName] = useState("");
  const [isFocusedName, setIsFocusedName] = useState(Styles.input);
  const [last_name, setLast_Name] = useState("");
  const [isFocusedLast_Name, setIsFocusedLast_Name] = useState(Styles.input);
  const [zip_code, setZip_Code] = useState("");
  const [isFocusedZip_Code, setIsFocusedZip_Code] = useState(Styles.input);
  const [identifier, setIdentifier] = useState("");
  const [isFocusedEmail, setIsFocusedEmail] = useState(Styles.input);
  const [password, setPassword] = useState("");
  const [isFocusedPWD, setIsFocusedPWD] = useState(Styles.input);
  const [passwordV, setPasswordV] = useState("");
  const [isFocusedPWDV, setIsFocusedPWDV] = useState(Styles.input);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const validateInput = () => {
    let errors = false;

    if (!name || name.length === 0) {
      errors = true;
    }

    if (!last_name || last_name.length === 0) {
      errors = true;
    }

    if (!zip_code || zip_code.length === 0) {
      errors = true;
    }

    if (!identifier || identifier.length === 0) {
      errors = true;
    }

    if (!password || password.length === 0) {
      errors = true;
    }

    if (!passwordV || passwordV.length === 0) {
      errors = true;
    }

    return !errors;
  };

  const authenticateUser = async () => {
    navigation.navigate("Home")
    // if (validateInput()) {
    //   setLoading(true);
    //   const user = new UserModel(
    //     identifier,
    //     password,
    //     name,
    //     last_name,
    //     zip_code
    //   );

    //   try {
    //     await user.register();
    //   } catch (err) {
    //     setError(err.message);
    //     setVisible(true);
    //     setLoading(false);
    //   }
    // } else {
    //   setError("Please fill out all *required fields");
    //   setVisible(true);
    //   setLoading(false);
    // }
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
        <Text style={Styles.appTitle}>S’inscrire</Text>
        <Paragraph style={Styles.appDesc}>
          Entrez vos informations personnelles pour vous inscrire
        </Paragraph>
      </View>

      <>
        <View style={Styles.divider} />
        <View style={Styles.inputContainer}>
          <TextInput
            style={isFocusedLast_Name}
            onChangeText={(text) => setLast_Name(text)}
            onFocus={() => setIsFocusedLast_Name(Styles.input_focused)}
            onBlur={() => setIsFocusedLast_Name(Styles.input)}
            label="Nom"
            placeholder="Nom"
            placeholderTextColor="#AECCDA"
          >
            {last_name}
          </TextInput>
          <Icon
            icon="validate"
            size={22}
            color={last_name ? "#37AD00" : "transparent"}
            style={Styles.validate}
          />
        </View>
      </>
      <>
        <View style={Styles.divider} />
        <View style={Styles.inputContainer}>
          <TextInput
            style={isFocusedName}
            onChangeText={(text) => setName(text)}
            onFocus={() => setIsFocusedName(Styles.input_focused)}
            onBlur={() => setIsFocusedName(Styles.input)}
            label="Prenom"
            placeholder="Prénom"
            placeholderTextColor="#AECCDA"
          >
            {name}
          </TextInput>
          <Icon
            icon="validate"
            size={22}
            color={name ? "#37AD00" : "transparent"}
            style={Styles.validate}
          />
        </View>
      </>
      <>
        <View style={Styles.divider} />
        <View style={Styles.inputContainer}>
          <TextInput
            style={isFocusedZip_Code}
            onChangeText={(text) => setZip_Code(text)}
            onFocus={() => setIsFocusedZip_Code(Styles.input_focused)}
            onBlur={() => setIsFocusedZip_Code(Styles.input)}
            label="ZIP_Code"
            keyboardType="numeric"
            placeholder="Code Postal"
            placeholderTextColor="#AECCDA"
          >
            {zip_code}
          </TextInput>
          <Icon
            icon="validate"
            size={22}
            color={zip_code ? "#37AD00" : "transparent"}
            style={Styles.validate}
          />
        </View>
      </>
      <>
        <View style={Styles.divider} />
        <View style={Styles.inputContainer}>
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
          <Icon
            icon="validate"
            size={22}
            color={identifier ? "#37AD00" : "transparent"}
            style={Styles.validate}
          />
        </View>
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
          <Pressable
            onPress={handlePasswordVisibility}
            style={[Styles.inputEye, { right: password ? 35 : 0 }]}
          >
            <Icon icon={rightIcon} size={22} color="#90BDD0" />
          </Pressable>
          <Icon
            icon="validate"
            size={22}
            color={password ? "#37AD00" : "transparent"}
            style={Styles.validate}
          />
        </View>
      </>
      <>
        <View style={Styles.divider} />
        <View style={Styles.inputPwdContainer}>
          <TextInput
            style={isFocusedPWDV}
            onChangeText={(text) => setPasswordV(text)}
            onFocus={() => setIsFocusedPWDV(Styles.input_focused)}
            onBlur={() => setIsFocusedPWDV(Styles.input)}
            label="Confirmer le mot de passe"
            placeholder="Confirmer le mot de passe"
            autoComplete="password"
            textContentType="password"
            placeholderTextColor="#AECCDA"
            secureTextEntry={passwordVisibility}
          >
            {passwordV}
          </TextInput>
          <Pressable
            onPress={handlePasswordVisibility}
            style={[Styles.inputEye, { right: passwordV == password && passwordV ? 35 : 0 }]}
          >
            <Icon icon={rightIcon} size={22} color="#90BDD0" />
          </Pressable>
          <Icon
            icon="validate"
            size={22}
            color={passwordV == password && passwordV ? "#37AD00" : "transparent"}
            style={Styles.validate}
          />
        </View>
      </>

      <>
        <View style={Styles.divider} />
        <Pressable
          loading={loading}
          disabled={
            !(
              name &&
              last_name &&
              zip_code &&
              identifier &&
              password &&
              password == passwordV
            )
          }
          style={[
            Styles.connexion,
            {
              backgroundColor: !(
                name &&
                last_name &&
                zip_code &&
                identifier &&
                password &&
                password == passwordV
              )
                ? "#90BDD0"
                : "#005B85",
            },
          ]}
          onPress={() => authenticateUser()}
          mode="contained"
        >
          <Text style={Styles.connexionText}>Inscription</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Home")} style={Styles.lost}>
          <Text style={Styles.lostText}>Ne pas s’inscrire</Text>
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

export default Register;
