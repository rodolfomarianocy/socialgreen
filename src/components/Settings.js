import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TextInput, AccessibilityInfo, AsyncStorage, Keyboard, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Settings extends Component {

    static navigationOptions = {
        drawerLabel: 'Settings',
        
        drawerIcon: ({ focused, tintColor }) => (
            <Image
                style={styles.logo}
                style={{ width: 40, height: 40}}
                source={require('../assets/settings.png')}
                />
        )
    }
    
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        }
    }
    
    gravarTotal = async () => {
        try {
            await AsyncStorage.setItem("@OK_API", this.state.total)
            Keyboard.dismiss();
            Alert.alert('Sucesso', 'Dado salvo com sucesso');
        } catch (e) {
            alert(e);
        }

}
    render() {
      

        return (
            <View style={styles.container}>
                   
                    <TextInput
                    style={styles.input}
                    placeholder="Amount of friends per seach..."
                    onChangeText = { (text) => this.setState({total: text})}
                />

                
            <TouchableOpacity
                style={styles.botao}
                onPress={ this.gravarTotal}
                >
                    <Text style = {styles.textBotao}>Go</Text>
            </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc'
    },
    text: {
        fontSize:14,
        fontWeight: 'bold'
    },
    textBotao:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff'
    },
    input: {
        marginTop: 10,
        width: 250,
        height: 42,
        backgroundColor: '#fff',
        borderRadius: 4
    },
    botao: {
        marginTop: 10,
        width: 150,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8e44ad',
        borderRadius: 4
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 100
    }
})