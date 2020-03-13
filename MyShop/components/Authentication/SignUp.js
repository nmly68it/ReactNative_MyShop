import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import register from './../../api/register';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: ''
        }
    }

    registerUser = () => {
        const { name, email, password, rePassword } = this.state;
        register(email, name, password)
            .then(res => {
                if (res === 'THANH_CONG'){
                    this.onSuccess();
                }else {
                    this.onFail();
                }
            });

    }

    onSuccess() {
        Alert.alert(
            'Notice',
            'Sign up successfully',
            [            
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false },
        );
    }

    onFail() {
        Alert.alert(
            'Notice',
            'Email has been used by other',
            [            
                { text: 'OK', onPress: () => this.onReset() },
            ],
            { cancelable: false },
        );
    }

    onReset(){
        this.setState({
            //name: '',
            email: ''
            //password: '',
            //rePassword: ''
        });
    }

    render() {
        const {
            inputStyle, signInNowStyle, signInNowTextStyle
        } = styles;
        return (
            <View>
                <TextInput
                    style={inputStyle}
                    placeholder='Enter your name'
                    value={this.state.name}
                    onChangeText={text => this.setState({ name: text })}
                />
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
                <TextInput
                    style={inputStyle}
                    placeholder='Re-enter your password'
                    secureTextEntry
                    value={this.state.rePassword}
                    onChangeText={text => this.setState({ rePassword: text })}
                />
                <TouchableOpacity style={signInNowStyle} onPress={this.registerUser}>
                    <Text style={signInNowTextStyle}>SIGN UP NOW</Text>
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
