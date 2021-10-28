import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import {navigationRef} from './RootNavigator';
import {connect} from 'react-redux';
import Signup from '../screens/Signup/Signup';
import Login from '../screens/Login/Login';
import HomefindProduct from '../screens/Home-find-Prodcut/Home-find-Product';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import FindProducts from '../screens/FindProducts/FindProducts';
import PushProducts from '../screens/PushProducts/PushProducts';
import MyProducts from '../screens/MyProducts/MyProducts';
import MyOrders from '../screens/MyOrders/MyOrders';
import StoreSettings from '../screens/StoreSettings/StoreSettings';
import HelpCenter from '../screens/HelpCenter/HelpCenter';
import StoreList from '../screens/StoreList/StoreList';
import MyProfile from '../screens/MyProfile/MyProfile';
import Language from '../screens/Language/Language';
import FilterandSort from '../screens/FilterandSort/FilterandSort';

const MainStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreenStack() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false }}>
      <HomeStack.Screen name="HomeProduct" component={HomefindProduct} />
      <HomeStack.Screen name="Find Products" component={FindProducts} />
      <HomeStack.Screen name="Push Products" component={PushProducts} />
      <HomeStack.Screen name="My Products" component={MyProducts} />
      <HomeStack.Screen name="My Orders" component={MyOrders} />
      <HomeStack.Screen name="Store Settings" component={StoreSettings} />
      <HomeStack.Screen name="Help Center" component={HelpCenter} />
      <HomeStack.Screen name="Store List" component={StoreList} />
      <HomeStack.Screen name="My Profile" component={MyProfile} />
      <HomeStack.Screen name="Language" component={Language} />
      <HomeStack.Screen name="Filter" component={FilterandSort} />
    </HomeStack.Navigator>
  );
}

function AuthScreen() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false }}>
      <AuthStack.Screen name="Sign up" component={Signup} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Forgot Password" component={ForgotPassword} />
      <AuthStack.Screen name="Drawer" component={DrawerScreen}/>
    </AuthStack.Navigator>
  );
}

function DrawerScreen(){
  return (
    <Drawer.Navigator
    drawerContent={props => <DrawerContent { ...props} />}
    screenOptions = {{
      headerShown: false,
    }}
    initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreenStack} screenOptions={{headerShown: false}}/>
    </Drawer.Navigator>
  )
} 

function Route() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator screenOptions={{headerShown: false }}>
        <MainStack.Screen
          name="Main"
          component={AuthScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default connect() (Route);