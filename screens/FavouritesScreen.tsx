import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealList/MealsList";
// import { useContext } from "react";
// import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
import { RootState } from "../store/redux/store";

export default function FavouritesScreen() {
  //   const favouriteMealsCtx = useContext(FavouritesContext);
  const favouriteMealIds = useSelector(
    (state: RootState) => state.favouriteMeals.ids
  );
  const favouriteMealsArray = MEALS.filter((meal) =>
    // favouriteMealsCtx.ids.includes(meal.id)
    favouriteMealIds.includes(meal.id)
  );

  if (favouriteMealsArray.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>Your favourite List is empty.</Text>
      </View>
    );
  }

  return <MealsList items={favouriteMealsArray} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
});
