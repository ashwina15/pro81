import * as React from 'react';
import{createDrawerNavigator}from"@react-navigation/drawer";
import TabNavigator from "./tabNavigator"
import Profile from"../screens/Profile";
const Drawer= createDrawerNavigator();
const DrawerNavigator = ()=>{
    return(
        <Drawer.Navigator>screenOptions={{headerShown:false}}>
        <Drawer.screen name = "Home" components= {tabNavigator}/>
        <Drawer.screen name = "Profile" components= {Profile}/>
    </Drawer.Navigator>

    )
}export default DrawerNavigator