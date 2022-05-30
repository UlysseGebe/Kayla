import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    base: {
      flex: 1,
      paddingLeft: 16,
      paddingRight: 16,
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: '#F8FDFF',
    },
    background: {
      width,
      height,
      position: "absolute",
    },
    divider: {
      height: 32,
    },
    headline: {
      fontSize: 30,
      color: '#005B85',
    },
    appDesc: {
      textAlign: 'center',
      color: '#005B85',
    },
    header: {
      padding: 32,
    },
    input: {
      color: '#005B85',
      borderBottomWidth: 2,
      borderColor: '#90BDD0'
    },
    appTitle: {
      textAlign: 'center',
      fontSize: 35,
      lineHeight: 35,
      fontWeight: '700',
      color: '#005B85',
    },
    connexion: {
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingTop: 23,
      paddingBottom: 23,
      paddingRight: 84,
      paddingLeft: 84,
      borderRadius: 50,
      backgroundColor: '#90BDD0',
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
  });