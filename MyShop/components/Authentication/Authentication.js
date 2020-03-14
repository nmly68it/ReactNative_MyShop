import React, { Component } from "react";
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import icLogo from './../../assets/media/appIcon/ic_logo.png';
import icBack from './../../assets/media/appIcon/back_white.png';
import SignIn from './SignIn';
import SignUp from './SignUp';

const { height, width } = Dimensions.get('window');

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true
        }
    }

    goToSignIn() {
        this.setState({
            isSignIn : true
        });
    }

    openSignInPage = () => {
        this.setState({
            isSignIn: true
        });        
    }

    openSignUpPage = () => {
        this.setState({
            isSignIn: false
        });        
    }

    goBack = () => {
        this.props.navigation.goBack();
        this.props.navigation.openDrawer();
    }

    render() {

        const {
            container, iconStyle, row1,
            titleStyle, controlStyle, signInStyle,
            styleUpStyle, inactiveStyle, activeStyle        
        } = styles;
        const  {navigation} = this.props;

        const mainPage = this.state.isSignIn ? <SignIn goBack={this.goBack.bind(this)}/> : <SignUp goToSignIn={this.goToSignIn.bind(this)}/>;
        return (
            <View style={container}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image source={icBack} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Wearing a Dress</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                {mainPage}              
                <View style={controlStyle}>
                    <TouchableOpacity style={signInStyle} onPress={this.openSignInPage}>
                        <Text style={this.state.isSignIn ? activeStyle : inactiveStyle }>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styleUpStyle} onPress={this.openSignUpPage}>
                        <Text style={this.state.isSignIn ? inactiveStyle : activeStyle }>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // height: height / 8,
        // backgroundColor: '#34B089',
        // padding: 10,
        // justifyContent: 'space-around'
        flex: 1,
        backgroundColor: '#3AC48C',
        padding: 20,
        justifyContent: 'space-between'
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconStyle: {
        width: 30,
        height: 30
    },
    titleStyle: {
        color: '#FFF',
        fontFamily: 'Avenir',
        fontSize: 30
    },
    controlStyle: {
        flexDirection: 'row',
        width: width - 50,
    },
    signInStyle: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        paddingVertical: 15,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginRight: 1
    },
    styleUpStyle: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        paddingVertical: 15,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginLeft: 1
    },
    inactiveStyle: {
        color: '#D7D7D7'
    },
    activeStyle: {
        color: '#3AC48C'
    }
});
