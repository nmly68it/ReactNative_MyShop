import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import signIn from './../../api/signIn';
import global from './../global';
import saveToken from './../../api/saveToken';
import getToken from './../../api/getToken';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    // componentDidMount() {
    //     getToken()
    //         .then(token => console.log("Tocken: " + token));
    // }

    onSignIn = () => {        
        const { email, password } = this.state;
        signIn(email, password)
            .then(res => this.onLoginSuccess(res))
            .catch(err => console.log(err));
    }

    onLoginSuccess(res) {
        global.onSignIn(res.user);
        this.props.goBack();
        saveToken(res.token);
    }

    render() {
        const {
            inputStyle, signInNowStyle, signInNowTextStyle
        } = styles;
        return (
            <View>
                <TextInput
                    style={inputStyle}
                    placeholder='Enter your email'
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput
                    style={inputStyle}
                    placeholder='Enter your password'
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                />
                <TouchableOpacity style={signInNowStyle} onPress={this.onSignIn}>
                    <Text style={signInNowTextStyle}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#FFF',
        marginBottom: 10,
        borderRadius: 30,
        paddingLeft: 30
    },
    signInNowStyle: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    signInNowTextStyle: {
        color: '#FFF',
        fontFamily: 'Avenir',
        fontWeight: '500'
    }
});
