import { FlatList, ListRenderItemInfo } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { Category } from "../models/category";
import CategoryGridTile from "../components/CategoryGridTile";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../App";

export default function CategoriesScreen({
  navigation,
}: CategoriesScreenProps) {
  function renderCategoryItem(itemData: ListRenderItemInfo<Category>) {
    function pressHandler() {
      navigation.navigate("MealsOverview");
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

type CategoriesScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, "MealsCategories">;
};
