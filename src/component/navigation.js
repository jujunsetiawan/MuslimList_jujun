import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import {createDrawerNavigator} from "@react-navigation/drawer"
import Intro from "./intro"
import Login from "./login"
import Register from "./register"
import Reset from "./reset"
import Home from "./home"
// import Drawer from "./drawer"

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component = {Home}/>
        </Drawer.Navigator>
    )
}
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Intro" component = {Intro} options = {{headerShown:false}}/>
                <Stack.Screen name = "Login" component = {Login} options = {{headerShown:false}}/>
                <Stack.Screen name = "Register" component = {Register}/>
                <Stack.Screen name = "Reset" component = {Reset}/>
                <Stack.Screen name = "Home" component = {RootDrawer}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;