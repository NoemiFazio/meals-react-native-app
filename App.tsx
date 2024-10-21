import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealScreen from "./screens/MealScreen";
import { Meal } from "./models/meal";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouritesScreen from "./screens/FavouritesScreen";

const Stack = createNativeStackNavigator<StackParamList>();
const Drawer = createDrawerNavigator<StackParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
    // screenOptions={{
    //   headerStyle: {
    //     backgroundColor: "white",
    //   },
    //   headerTintColor: "black",
    //   sceneContainerStyle: {
    //     backgroundColor: "white",
    //   },
    // }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
        }}
      />
      <Drawer.Screen name="Favourites" component={FavouritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName="MealsCategories"
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
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="Meal" component={MealScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export type StackParamList = {
  Categories: undefined;
  Favourites: undefined;
  MealsCategories: undefined;
  Drawer: undefined;
  MealsOverview: {
    categoryId: string;
  };
  Meal: Meal;
};
