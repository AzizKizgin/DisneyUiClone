// @ts-nocheck
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feed from "./screens/Feed";
import { Icon, Image } from "@rneui/base";
import Search from "./screens/Search";
import Download from "./screens/Download";
import Account from "./screens/Account";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarStyle: { backgroundColor: "#1a1c29" } }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarLabel: "Feed",
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Icon name="home" iconStyle={{ color: "gray" }} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarLabel: "Search",
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Icon
                  name="search"
                  type="font-awesome"
                  iconStyle={{ color: "gray" }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Download"
        component={Download}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarLabel: "Download",
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Icon
                  name="download"
                  type="material-community"
                  iconStyle={{ color: "gray" }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarLabel: "Account",
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={require("./assets/disney/mickey.png")}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 50,
                    borderColor: "lightgray",
                    borderWidth: 2,
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
