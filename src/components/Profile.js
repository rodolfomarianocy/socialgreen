import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native';

export default class Profile extends Component {

    static navigationOptions = {
        drawerLabel: 'Perfil',
        
        drawerIcon: ({ focused, tintColor }) => (
            <Image
                style={styles.logo}
                style={{ width: 40, height: 40}}
                source={require('../assets/wolf.png')}
                />
        )
    }
    
    render() {
    
        return (
            <View style={styles.container}>

                <Image
                    style={styles.logo}
                    source={require('../assets/wolf.png')}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7f8c8d'
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 100
    }
 
})