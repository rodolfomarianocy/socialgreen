import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, FlatList, ActivityIndicator, AsyncStorage } from 'react-native';

export default class Friends extends Component {

    static navigationOptions = {
        drawerLabel: 'Friends',

        drawerIcon: ({ focused, tintColor }) => (
            <Image
                style={styles.logo}
                style={{ width: 40, height: 40}}
                source={require('../assets/friends.png')}
                />
        )
    }
    
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
                data: []
            }
        }
    
       async componentDidMount(){

        let totalRec = 0;
        try {
            totalRec = await AsyncStorage.getItem("@OK_API");

            if(totalRec === null) {
                totalRec = 1000;
            }
          
        } catch (e) {
            alert(e);
        }

            fetch(`https://randomuser.me/api/?results=${totalRec}`)
            .then( res => res.json() )
            .then( res => {
                this.setState ({
                    data: res.results || [],
                    loading: false
                })
            })
        }
           

      
    render() {
        if(this.state.loading) {
            return (
                <View style={styles.containerLoading}>
                    <ActivityIndicator
                    size='large'
                    color='#f1c40f'
                    />
                    <Text>Aguarde, carregando os dados da API...</Text>
                </View>
                )
        }else{
        return (
            <View style={styles.container}>
                
            <FlatList
                data={this.state.data}
                renderItem={({item}) => (
                    <View style={styles.line}>
                        <Image
                            source={{ uri: item.picture.thumbnail}}
                            style={styles.avatar}
                        />
                    
                    <View style>
                        <Text style={styles.email}>{item.email}</Text>
                        <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
                    </View>
                </View>
                )}
                keyExtractor={ item => item.email }
                />

            </View>
            )
        }
    
    }
}

const styles = StyleSheet.create({
    containerLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    container: {
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: '#fff',
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 100
    },

    text: {
        fontSize: 20,
        color: '#ecf0f1'
    },

    text1: {
        fontSize: 16,
        color: '#2c3e'
    },
    line: {
        height: 50,
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
        alignSelf: 'center'
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    name: {
        fontSize: 12,
    },
    email: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})

