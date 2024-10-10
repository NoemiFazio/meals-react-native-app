import { Pressable, View, Text } from "react-native";
import { CategoryGridTileProps } from "./CategoryGridTile.props";

export default function CategoryGridTile({
  title,
  color,
}: CategoryGridTileProps) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
