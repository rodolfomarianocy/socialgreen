import React, { Component } from 'react'
import {Textlogin1, Textlogin2, Container, Logologin, Input, Bottomlogin, BotaoText} from './css/styles';
export default class App extends Component {
  
               
    state = {
        nome: ''
    }
    render() {
        return (
            <Container>
                <Logologin
                    source={require('../assets/socialgreenlogo2.png')}
                />
                <Textlogin1>{`Social Green

                `}
                </Textlogin1>
                <Input
                  
                    onChangeText={ text => this.state.nome = text }
                    placeholder="Digite seu email"
                />
                <Input
                  
                    secureTextEntry={true}
                    placeholder="Digite sua senha"
                />
                <Textlogin2>
                    {`
Esqueceu a senha?`}
                </Textlogin2>
                <Bottomlogin
                   
                    onPress={ () => { this.props.navigation.navigate('Home', {'nome': this.state.nome}) } }
                    >
                    <BotaoText>Entrar</BotaoText>
                </Bottomlogin>
            </Container>
        )
    }
}