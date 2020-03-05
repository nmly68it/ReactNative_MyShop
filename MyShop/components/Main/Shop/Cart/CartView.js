import React, { Component } from "react";
import { Button, View, Text, TouchableOpacity } from 'react-native';

export default class CartView extends Component {

    goToProductDetail = () => {
        this.props.navigation.navigate('ProductDetail');
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Cart Component</Text>
                <TouchableOpacity onPress={this.goToProductDetail}>
                    <Text>Go To Product Details</Text>
                </TouchableOpacity>
            </View>
        );
    }
}    