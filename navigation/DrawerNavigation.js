import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Profile from '../screens/Profile';
import StackNavigator from './StackNavigator';
import Logout from '../screens/Logout';

const Drawer = createDrawerNavigator();

const DrawerNavigator= ()=> {
  return(
    <Drawer.Navigator>
       <Drawer.Screen name='Tela Inicial' component={TabNavigator}/> 
       <Drawer.Screen name='Stack' component={StackNavigator}/> 
       <Drawer.Screen name='Perfil' component={Profile}/>
       <Drawer.Screen name='Logout' component={Logout}/>
    </Drawer.Navigator>
  );
};