import { View, FlatList } from "react-native";
import Styles from "./style";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

export default function EvolutionComponent() {
  return (
    <View style={Styles.container}>
      <FlatList />
    </View>
  );
}
