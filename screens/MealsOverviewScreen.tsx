import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "../App";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { Meal } from "../models/meal";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";

export default function MealsOverviewScreen({
  //queste sono prop ricevute direttamente da react navigation
  route,
  navigation,
}: MealsOverviewScreenProps) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // uso questo rispetto al classico useEffect in modo da runnare la funzione simultaneamente
  // a quella dell'intero componente perchè, altrimenti, si avrebbe visivamente un caricamento
  // ritardato del titolo della categoria;
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((item) => item.id === catId)?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

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
  navigation: NativeStackNavigationProp<StackParamList, "MealsOverview">;
};
