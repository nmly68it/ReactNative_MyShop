import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ListProduct extends Component {
    goBack = () => {
        this.props.navigation.goBack();
    }

    goToProductDetail = () => {
        this.props.navigation.push('ProductDetail');
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'green' }}>
                <TouchableOpacity onPress={this.goBack}>
                    <Text>Go Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToProductDetail}>
                    <Text>Go To Product Details</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
