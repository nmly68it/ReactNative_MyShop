import React, { Component } from "react";
import { View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CartView from './CartView';
import ProductDetail from '../ProductDetail/ProductDetail';

const Stack = createStackNavigator();


export default class Cart extends Component {
    render() {
        const {cartList} = this.props;
        return (
            <Stack.Navigator
                initialRouteName="CartView"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="CartView">
                    {props => <CartView {...props} cartList={cartList}/>}
                </Stack.Screen>
                <Stack.Screen name="ProductDetail" component={ProductDetail} />
            </Stack.Navigator>
        );
    }
}

