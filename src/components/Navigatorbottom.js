import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Home from './Home';
import Friends from './Friends';
import Settings from './Settings';

const TabNavigator = createMaterialBottomTabNavigator(
  {
   
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Image
            source={require('../assets/home.png')}
            style={{width:27, height: 27}}
            />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#a3c2fa',
        barStyle: { backgroundColor: '#2c6d6a' },
      }
    },
    Friends: {
      screen: Friends,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Image
            source={require('../assets/friends.png')}
            style={{width:25, height: 25}}

            />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#92c5c2',
        barStyle: { backgroundColor: '#2c6d6a' },
      }
    },   
    Settings: {
        screen: Settings,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Image
              source={require('../assets/settings.png')}
              style={{width:25, height: 25}}
              />
            </View>
          ),
          activeColor: '#ffffff',
          inactiveColor: '#ebaabd',
          barStyle: { backgroundColor: '#2c6d6a' },
    },
  },
},
  {
    initialRouteName: 'Home',
    activeColor: '#ffffff',
    inactiveColor: '#bda1f7',
    barStyle: { backgroundColor: '#6948f4' },
  }
);

export default createAppContainer(TabNavigator);