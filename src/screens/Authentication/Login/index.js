import React from "react";
import { View, StatusBar, Pressable, TextInput, Image } from "react-native";
import { Headline, Paragraph, Button, Snackbar, Portal } from "react-native-paper";
import UserModel from "../../../models/UserModel";
import useTogglePasswordVisibility from "../useTogglePasswordVisibility";
import CustomIcon from '../../../components/CustomIcon'
import Styles from "./style";


const Login = ({navigation}) => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
  const [identifier, setIdentifier] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

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
      } catch (err) {
        setError(err.message);
        setVisible(true);
        setLoading(false);
      }
    } else {
      setError("Please fill out all *required fields");
      setVisible(true);
      setLoading(false);
    }
  };

  return (
    <View style={Styles.base}>
      <Image source={require('../../../assets/images/background.png')} style={Styles.background} />
        <>
          <StatusBar backgroundColor="transparent" barStyle="dark-content" />
          <Button title="Retour" onPress={() => navigation.goBack()}>
            <CustomIcon
              name={rightIcon}
              size={22}
              color="#90BDD0"
            />
            Retour
          </Button>
        </>

        <View style={Styles.header}>
          <Headline style={Styles.appTitle}>Se connecter</Headline>
          <Paragraph style={Styles.appDesc}>
            Entrez votre adresse mail et votre mot de passe pour vous connecter
          </Paragraph>
        </View>

        <>
          <View style={Styles.divider} />
          <TextInput
            style={Styles.input}
            onChangeText={(text) => setIdentifier(text)}
            label="Adresse mail"
            autoComplete="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholder="Adresse mail"
            placeholderTextColor="#90BDD0"
          >
            {identifier}
          </TextInput>
        </>

        <>
          <View style={Styles.divider} />
          <TextInput
            style={Styles.input}
            onChangeText={(text) => setPassword(text)}
            label="Mot de passe"
            placeholder="Mot de passe"
            autoComplete="password"
            textContentType="password"
            placeholderTextColor="#90BDD0"
            secureTextEntry={passwordVisibility}
          >
            {password}
          </TextInput>
          <Pressable onPress={handlePasswordVisibility}>
            <CustomIcon
              name={rightIcon}
              size={22}
              color="#90BDD0"
            />
          </Pressable>
        </>

        <>
          <View style={Styles.divider} />
          <Button
            loading={loading}
            disabled={loading}
            style={Styles.connexion}
            onPress={() => authenticateUser()}
            mode="contained"
          >
            Connexion
          </Button>
          <View style={Styles.divider} />
          <View style={Styles.divider} />
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
