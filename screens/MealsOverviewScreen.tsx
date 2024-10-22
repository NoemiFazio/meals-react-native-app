import { RouteProp } from "@react-navigation/native";
import { ParamList } from "../App";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealList/MealsList";

export default function MealsOverviewScreen({
  route,
  navigation,
}: MealsOverviewScreenProps) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((item) => item.id === catId)?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}

type MealsOverviewScreenProps = {
  route: RouteProp<ParamList, "MealsOverview">;
  navigation: NativeStackNavigationProp<ParamList, "MealsOverview">;
};
