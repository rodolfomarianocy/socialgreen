import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';

import styles from '../styles/App';

export default class App extends Component {

    state = {
        slogan: 'Seu canal de nerdologia'
    }

    alternar = () => {
       this.setState({
            slogan: this.state.slogan ? '' : 'Seu canal de nerdologia'
       });
    }

    render(){
        return (

            <View style={styles.container}>

                <TouchableOpacity
                    style={styles.botao}
                    onPress={this.alternar}
                >
                    
                    <Text>Mudar state</Text>

                </TouchableOpacity>

                <Text style={styles.texto}>HELPME</Text>
                    <Text>{ this.state.slogan }</Text>
            </View>
        );
    }
}
//sdasdjkasjdkasjdksajdkjaskjdjas