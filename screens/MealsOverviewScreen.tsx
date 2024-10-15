import { Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { useRoute } from "@react-navigation/native";

export default function MealsOverviewScreen({
  route,
}: MealsOverviewScreenProps) {
  // alternativa all'uso di {route} tramite props, è l'uso di useRoute() con const route = useRoute()
  const catId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

type MealsOverviewScreenProps = {
  route: RouteProp<StackParamList, "MealsOverview">;
};
