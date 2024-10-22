import { FlatList, ListRenderItemInfo, View, StyleSheet } from "react-native";
import { Meal } from "../../models/meal";
import MealItem from "./MealItem";

export default function MealsList({ items }: MealsListProps) {
  function renderMealItem(itemData: ListRenderItemInfo<Meal>) {
    const item = itemData.item;

    const mealItemProps = {
      ...item,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
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

type MealsListProps = {
  items: Meal[];
};
