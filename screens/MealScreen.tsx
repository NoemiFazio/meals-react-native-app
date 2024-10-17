import { RouteProp } from "@react-navigation/native";
import { Text, View } from "react-native";
import { StackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";

export default function MealScreen({ route, navigation }: MealsScreenProps) {
  const mealTitle = route.params.title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealTitle,
    });
  }, [mealTitle, navigation]);

  return (
    <View>
      <Text>Ciaone, sono il MealScreen</Text>
    </View>
  );
}

type MealsScreenProps = {
  route: RouteProp<StackParamList, "Meal">;
  navigation: NativeStackNavigationProp<StackParamList, "Meal">;
};
