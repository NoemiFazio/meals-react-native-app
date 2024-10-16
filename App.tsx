import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: {
              backgroundColor: "white",
            },
            headerTintColor: "black",
            contentStyle: {
              backgroundColor: "white",
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Meal Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // route e navigation fanno parte dell'oggetto che otteniamo automaticamente da react navigation
            // questo è un modo per settare dinamicamente il titolo della MealsOverviewScreen, ma lo commentiamo
            // perchè è possibile ottenere lo stesso risultato direttamente dal componente MealsOverviewScreen.
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export type StackParamList = {
  MealsCategories: undefined;
  MealsOverview: {
    categoryId: string;
  };
};
