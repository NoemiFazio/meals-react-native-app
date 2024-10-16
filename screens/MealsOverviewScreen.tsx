import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "../App";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { Meal } from "../models/meal";

export default function MealsOverviewScreen({
  route,
}: MealsOverviewScreenProps) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData: ListRenderItemInfo<Meal>) {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
