import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OrderScreen from '../screen/OrderScreen';
import ProductScreen from '../screen/ProductScreen';
import ProfileScreen from '../screen/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: { height: Dimensions.get('window').height - 780 }
    }}>
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <MaterialCommunityIcons name="cart" size={28} color="black" />
            ) : (
              <MaterialCommunityIcons name="cart-outline" size={28} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={ProductScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <MaterialCommunityIcons name="food" size={28} color="black" />
            ) : (
              <MaterialCommunityIcons name="food-outline" size={28} color="black" />
            ),
        }}
      />
      <Tab.Screen name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <MaterialCommunityIcons name="store" size={28} color="black" />
            ) : (
              <MaterialCommunityIcons name="store-outline" size={28} color="black" />
            ),
        }}
      />

    </Tab.Navigator>
  )
}

export default TabNavigation
