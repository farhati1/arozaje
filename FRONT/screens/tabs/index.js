import { View, Text } from "react-native";
import React, {useState} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../Home";
import Messages from "../Messages";
import Camera from "../Camera/camera";
import Maps from "../Maps/map.js";
import Profil from "../Profil";
import { UserIdContext } from "../../App";


const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  const [userId, setUserId] = useState(null);
  return (
    <UserIdContext.Provider value={ userId}>
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "#ADD290",
      }}
    >
      <Tab.Screen
        name="Plantes"
        component={Home}
        options={{
          tabBarLabel: "Plantes",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="grass" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="message-reply-text"
              color={color}
              size={size}
            />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarLabel: "Poster",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Carte"
        component={Maps}
        options={{
          tabBarLabel: "Maps",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarLabel: "Profil",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    </UserIdContext.Provider>
  );
};

export default BottomTabs;
