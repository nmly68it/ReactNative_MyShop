import React, { Component } from "react";
import { View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchView from './SearchView';
import ProductDetail from '../ProductDetail/ProductDetail';

const Stack = createStackNavigator();


export default class Search extends Component {        
    render() {
        return (
            
            <Stack.Navigator
                initialRouteName="SearchView"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="SearchView" component={SearchView} />
                <Stack.Screen name="ProductDetail" component={ProductDetail} />
            </Stack.Navigator>
        );
    }
}

