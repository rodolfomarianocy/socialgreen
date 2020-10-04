import React, { Component } from 'react'
import {Textbegin, Texto2, Container1, Logotwo, Botao, Botao2, BotaoText} from './css/styles';
export default class App extends Component {
  
               
    state = {
        nome: ''
    }
    render() {
        return (
            <Container1>
                <Texto2>{`Social Green`}
                </Texto2>
                <Logotwo 
                    source={require('../assets/socialgreenlogo2.png')}
                />
                <Textbegin>
                    {`     Faça conexões em nossa plataforma 
e ajude o meio ambiente, ganhe benefícios!

`}
                </Textbegin>
                
                <Botao
                    onPress={ () => { this.props.navigation.navigate('Login', {'nome': this.state.nome}) } }
                    >
                    <BotaoText>Entrar</BotaoText>
                </Botao>
                <Botao2
                   onPress={ () => { this.props.navigation.navigate('Home', {'nome': this.state.nome}) } }
                   >
                   <BotaoText>Criar Conta</BotaoText>
                   
               </Botao2>
            </Container1>
        )
    }
}