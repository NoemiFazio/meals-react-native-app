import { View, Text, StyleSheet } from "react-native";

export default function List({ data }: ListProps) {
  return data.map((item) => (
    <View key={item} style={styles.listItem}>
      <Text style={styles.itemText}>- {item}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "ghostwhite",
  },
  itemText: {
    textAlign: "center",
  },
});

type ListProps = {
  data: string[];
};
