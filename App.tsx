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
import { Ionicons } from "@expo/vector-icons";
import FavouritesContextProvider from "./store/context/favourites-context";

const Stack = createNativeStackNavigator<ParamList>();
const Drawer = createDrawerNavigator<ParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: "ghostwhite",
        drawerActiveTintColor: "black",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="list" />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          title: "Your Favourites",
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="star" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <FavouritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
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
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="Meal" component={MealScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export type ParamList = {
  Categories: undefined;
  Favourites: undefined;
  MealsCategories: undefined;
  Drawer: undefined;
  MealsOverview: {
    categoryId: string;
  };
  Meal: Meal;
};
