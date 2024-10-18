import { RouteProp } from "@react-navigation/native";
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { StackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import MealDetails from "../components/MealDetails";
import List from "../components/MealDetail/List";

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
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails
        affordability={affordability}
        complexity={complexity}
        duration={duration}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Text style={styles.subtitle}>Ingredients</Text>
          <List data={ingredients} />
          <Text style={styles.subtitle}>Steps</Text>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 15,
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  detailText: {
    color: "grey",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomWidth: 1,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});

type MealsScreenProps = {
  route: RouteProp<StackParamList, "Meal">;
  navigation: NativeStackNavigationProp<StackParamList, "Meal">;
};
