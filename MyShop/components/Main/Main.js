import React, { Component } from "react";
import { Image, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Shop from './Shop/Shop';
import OrderHistory from './../OrderHistory/OrderHistory';
import ChangeInfo from './../ChangeInfo/ChangeInfo';
import Authentication from './../Authentication/Authentication';
import profileIcon from './../../assets/media/temp/profile.png';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props, navigation) {
    
    const {
        container,
        profileIconStyle,
        btnStyle, txtStyle,
        btnLoggedInStyle,
        txtSignedInStyle,
        userLoginedInName
    } = styles;

    const beforeLogin = (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={btnStyle} onPress={() => props.navigation.navigate('Authentication')}>
                <Text style={txtStyle}>SIGN IN</Text>
            </TouchableOpacity>
        </View>
    );

    const afterLogin = (
        <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={userLoginedInName}>Nguyen Minh Ly</Text>
            <View>
                <TouchableOpacity style={btnLoggedInStyle} onPress={() => props.navigation.navigate('OrderHistory')}>
                    <Text style={txtSignedInStyle}>History Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={btnLoggedInStyle} onPress={() => props.navigation.navigate('ChangeInfo')}>
                    <Text style={txtSignedInStyle}>Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity style={btnLoggedInStyle} onPress={() => props.navigation.navigate('Authentication')}>
                    <Text style={txtSignedInStyle}>Sign Out</Text>
                </TouchableOpacity>
            </View>
            <View />
        </View>
    );

    const isLoggedIn = true;
    const menuUI = isLoggedIn ? afterLogin : beforeLogin;
    return (
        <View style={container}>
            <Image source={profileIcon} style={profileIconStyle} />
            {menuUI}
        </View>
    );
}

const { width } = Dimensions.get('window');
export default class Main extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isLoggedIn : false
    //     }
    // }

    render() {
        return (
            <Drawer.Navigator
                drawerContent={props => CustomDrawerContent(props)}
                drawerStyle={{
                    backgroundColor: '#34B089',
                    width: width / 1.6
                }}
            >
                <Drawer.Screen name="Shop" component={Shop} />
                <Drawer.Screen name="OrderHistory" component={OrderHistory} />
                <Drawer.Screen name="ChangeInfo" component={ChangeInfo} />
                <Drawer.Screen name="Authentication" component={Authentication} />
            </Drawer.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRightWidth: 1,
        borderColor: '#FFF',
        alignItems: 'center'
    },
    profileIconStyle: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginVertical: 30
    },
    btnStyle: {
        height: 50,
        width: (width / 1.6) - 20,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    txtStyle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#34B089'
    },
    btnLoggedInStyle: {
        height: 50,
        width: (width / 1.6) - 20,
        backgroundColor: '#FFF',
        paddingLeft: 15,
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 10
    },
    txtSignedInStyle: {
        fontSize: 16,
        fontFamily: 'Avenir',
        color: '#34B089'
    },
    userLoginedInName: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Avenir'
    }
});
