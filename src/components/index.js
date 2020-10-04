import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login';
import Navigatorbottom from './Navigatorbottom';
//import Navigator from './Navigator';
import Begin from './Begin';

const MainNav = createStackNavigator (
{
    Begin: {
        screen: Begin,
        navigationOptions : {
            title: 'Begin',
            header: null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title:'Login',
            header: null
        }
    },
    Navigatorbottom: {
        screen: Navigatorbottom,
        navigationOptions: {
            headerTitle: 'Social Green'
        }
    }
    /*
    Navigator: {
        screen: Navigator,
        navigationOptions: {
            headerTitle: 'Social Hot'
        }
    }
    */
})


export default createAppContainer(MainNav);