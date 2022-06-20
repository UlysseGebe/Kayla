import React from "react";
import IcoMoon from "react-icomoon";
import { Svg, Path } from "react-native-svg";
const iconSet = require("./selection.json");

const Icon = (props) => (
  <IcoMoon
    native
    SvgComponent={Svg}
    PathComponent={Path}
    iconSet={iconSet}
    {...props}
  />
);

export default Icon;
