import { RouteProp } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { StackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import MealDetails from "../components/MealDetails";

export default function MealScreen({ route, navigation }: MealsScreenProps) {
  const {
    title,
    imageUrl,
    ingredients,
    steps,
    affordability,
    complexity,
    duration,
  } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [title, navigation]);

  return (
    <View>
      <Image source={{ uri: imageUrl }} />
      <Text>{title}</Text>
      <MealDetails
        affordability={affordability}
        complexity={complexity}
        duration={duration}
      />
      <Text>Ingredients</Text>
      {ingredients.map((ingredient) => (
        <Text key={ingredient}>- {ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {steps.map((step) => (
        <Text key={step}>- {step}</Text>
      ))}
    </View>
  );
}

type MealsScreenProps = {
  route: RouteProp<StackParamList, "Meal">;
  navigation: NativeStackNavigationProp<StackParamList, "Meal">;
};
