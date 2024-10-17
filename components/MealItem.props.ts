import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../App";

export interface MealItemProps {
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
  onPress?: () => void;
}
