import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native';
import {Container} from './css/styles';
export default class Home extends Component {

    static navigationOptions = {
        drawerLabel: 'Home',

        drawerIcon: ({ focused, tintColor }) => (
            <Image
                style={styles.logo}
                style={{ width: 40, height: 40}}
                source={require('../assets/home.png')}
                />
        )
    }

    render() {
        const { navigation } = this.props;
        const nomeUsuario = navigation.getParam('nome');
        <Container>

        </Container>
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Feed</Text>
                </View>
                <View style={styles.container1}>

                </View>
                <View style={styles.container2}>
                    
                </View>
                <View style={styles.container3}>
                    
                </View>
                <View style={styles.container4}>
                    
                </View>
                <View style={styles.container5}>
                    
                </View>
                <View style={styles.container6}>
                    
                </View>

                <Text>
                    {`        
                    
         Social Green, interaja ajudando o meio ambiente!`}
                </Text>
            </View>
           
             
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
   
    container1: {
        width: 150,
        height:  100,
        marginTop: 10,
        marginLeft: 20,
        backgroundColor: '#FFF',
        borderRadius: 10
    },
    container2: {
        width: 150,
        height:  100,
        marginTop: -100,
        marginLeft: 190,
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    container3: {
        width: 150,
        height:  100,
        marginTop: 10,
        marginLeft: 20,
        backgroundColor: '#FFF',
        borderRadius: 10
    },
    container4: {
        width: 150,
        height:  100,
        marginTop: -100,
        marginLeft: 190,
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    container5: {
        width: 150,
        height: 100,
        marginTop: 10,
        marginLeft: 20,
        backgroundColor: '#FFF',
        borderRadius: 10
    },
    container6: {
        width: 150,
        height:  100,
        marginTop: -100,
        marginLeft: 190,
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
  
    header: {
        paddingTop: 5,
        paddingBottom: 6,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        borderRadius: 5,
        zIndex: 10,
        marginBottom: 30
    }
    
});

