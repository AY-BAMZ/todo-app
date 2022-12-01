import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/Home";
import Schedule from "../screens/Schedule/Schedule";
import { MaterialIcons } from "@expo/vector-icons";
import Notification from "../screens/Notification/Notification";
import Profile from "../screens/Profile/Profile";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // tabBarIcon: ({ focused, color, size }) => {
          //   let iconName;

          //   if (route.name === 'Home') {
          //     iconName = focused
          //       ? 'home'
          //       : 'home';
          //   } else if (route.name === 'Schedule') {
          //     iconName = focused ? 'schedule' : 'schedule';
          //   } else if (route.name === 'Notification') {
          //     iconName = focused ? 'notifications' : 'notifications';
          //   } else if (route.name === 'Profile') {
          //     iconName = focused ? 'profile' : 'profile';
          //   }

          //   // You can return any component that you like here!
          //   return <MaterialIcons name={iconName} size={size} color={color} />;
          // },
          tabBarActiveTintColor: "#865FC0",
          tabBarInactiveTintColor: "#BBBBBB",
          headerShown:false,
        })}
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
          component={Home}
        />
        <Tab.Screen
          name="Schedule"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="schedule" size={size} color={color} />
            ),
          }}
          component={Schedule}
        />
        <Tab.Screen
          name="Add"
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="md-add-sharp" size={28} color={color} />
            ),
            tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "#BBBBBB",
          }}
          component={Notification}
        />
        <Tab.Screen
          name="Notifications"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="notifications" size={size} color={color} />
            ),
          }}
          component={Notification}
        />
        <Tab.Screen
          name="Profile"
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
          }}
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
