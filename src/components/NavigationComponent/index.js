import { Pressable, View, Image } from "react-native";
import Styles from "./style";
import Icon from "../CustomIcon";

export default function NavigationComponent({
  state,
  descriptors,
  navigation,
}) {
  return (
    <View style={Styles.container}>
      <View style={Styles.nav}>
        <Image
          source={require("../../assets/images/NAVBAR.png")}
          style={Styles.background}
        />
        {state.routes.map((route, index) => {
          let name = "",
            size = 0,
            sizeTab = 0,
            top = 0,
            bottom = 0;
          if (route.name == "HomeTab") {
            name = "home";
            size = 30;
            sizeTab = 46;
            top = 38;
            bottom = 0;
          } else if (route.name == "CalendarTab") {
            name = "calendar";
            size = 39;
            sizeTab = 67;
            top = 32;
            bottom = -10;
          } else if (route.name == "ActivityTab") {
            name = "family";
            size = 39;
            sizeTab = 53.34;
            top = 20;
            bottom = 5;
          } else if (route.name == "FavoriteTab") {
            name = "star";
            size = 34;
            sizeTab = 44;
            top = 34;
            bottom = 2;
          } else if (route.name == "ProfilTab") {
            name = "profil";
            size = 47;
            sizeTab = 36;
            top = 25;
            bottom = 5;
          }
          return (
            <Pressable
              key={index}
              onPress={() => {
                navigation.navigate({ name: route.name, merge: true });
              }}
              style={Styles.btn}
            >
              <Icon
                style={{ position: "absolute", top: top }}
                icon={name}
                size={size}
              />
              <Icon
                style={{ position: "absolute", bottom: bottom }}
                icon={name + "Tab"}
                size={sizeTab}
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
