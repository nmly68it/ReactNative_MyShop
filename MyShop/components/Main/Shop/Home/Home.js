import React, { Component } from "react";
import { View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from './HomeView';
import ListProduct from './../ListProduct/ListProduct';
import ProductDetail from './../ProductDetail/ProductDetail';


const Stack = createStackNavigator();


export default class Home extends Component {
    render() {
        const { productTypes, topProducts } = this.props;        
        return (
            <Stack.Navigator
                initialRouteName="HomeView"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="HomeView">
                    {props => <HomeView {...props} productTypes={productTypes} topProducts={topProducts}/>}
                </Stack.Screen>
                <Stack.Screen name="ListProduct" component={ListProduct} />
                <Stack.Screen name="ProductDetail" component={ProductDetail} />
            </Stack.Navigator>
        );
    }
}

