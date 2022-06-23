import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  Button,
  ScrollView,
  Pressable,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import Styles from "./style";
import { LocaleConfig, Agenda } from "react-native-calendars";
import testIDs from "./testIDs";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ],
  monthNamesShort: [
    "Janv.",
    "Févr.",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc.",
  ],
  dayNames: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ],
  dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = "fr";

export default function CalendarScreen() {
  const calendarTheme = {
    arrowColor: "white",
    "stylesheet.calendar.header": {
      week: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between",
      },
    },
  };

  const items = {
    "2012-05-22": [{ name: "item 1 - any js object" }],
    "2012-05-23": [{ name: "item 2 - any js object", height: 80 }],
    "2012-05-24": [],
    "2012-05-25": [
      { name: "item 3 - any js object" },
      { name: "any js object" },
    ],
  };
  return (
    <SafeAreaView style={Styles.container}>
      <Image
        source={require("../../assets/images/background.png")}
        style={Styles.background}
      />
      <Agenda
        items={items}
        selected={Date.now()}
        renderItem={(item) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
        renderEmptyDate={() => {
          return (
            <View>
              <Text>This is empty date!</Text>
            </View>
          );
        }}
        rowHasChanged={(r1, r2)=> {return r1.name !== r2.name;}}
        theme={{
          ...calendarTheme,
          agendaDayTextColor: "yellow",
          agendaDayNumColor: "green",
          agendaTodayColor: "red",
          agendaKnobColor: "blue",
        }}
        // Agenda container style
        style={{}}
      />
    </SafeAreaView>
  );
}
