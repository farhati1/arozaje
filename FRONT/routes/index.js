import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import BottomTabs from "../screens/tabs";
import MessageDetails from "../screens/MessageDetails";
import PlantsItemDetails from "../screens/PlantsItemDetails";
// import PlantsPostItem from "../components/PlantsPostItem";
import WelcomePage from "../screens/WelcomePage";
import NewUserPage from "../components/Connect/inscription";
import Connexion from "../screens/Connexion";
import User from "../components/Connect/connexion";
const Routes = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomePage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="MessageDetails" component={MessageDetails} options={{ headerShown: true }} />
        <Stack.Screen name="PlantsItemDetails" component={PlantsItemDetails} options={{ headerShown: true }} />
        {/* <Stack.Screen name="PlantsPostItem" component={PlantsPostItem} options={{ headerShown: true }}/> */}
        <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: true }} />
        <Stack.Screen name="NewUserPage" component={NewUserPage} />
        <Stack.Screen name="Connexion" component={Connexion} options={{ headerShown: true }} />
        <Stack.Screen name="User" component={User} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();
export default Routes;
