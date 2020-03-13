import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class SignIn extends Component {

    render() {
        const {
            inputStyle, signInNowStyle, signInNowTextStyle
        } = styles;
        return (
            <View>
                <TextInput style={inputStyle} placeholder='Enter your email' />
                <TextInput style={inputStyle} placeholder='Enter your password' />
                <TouchableOpacity style={signInNowStyle}>
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
