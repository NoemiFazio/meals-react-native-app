import { FlatList, ListRenderItemInfo } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { Category } from "../models/category";
import CategoryGridTile from "../components/CategoryGridtile";

export default function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
}

function renderCategoryItem(itemData: ListRenderItemInfo<Category>) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}
