import React, { Component } from 'react'
import { createAppContainer, AsyncStorage } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';
import Friends from './Friends';

const myDrawer = createDrawerNavigator (
    {
        Home: Home,
        Friends: Friends,
        Profile: Profile,
        Settings: Settings
    },
    {
        contentOptions: {
            activeTintColor: "#8e44ad",
            labelStyle: {
                fontSize: 16
            }
        }
    }
)

export default createAppContainer(myDrawer);