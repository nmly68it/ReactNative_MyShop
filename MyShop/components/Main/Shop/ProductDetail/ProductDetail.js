import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ProductDetail extends Component {
    goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <TouchableOpacity onPress={this.goBack}>
                    <Text>Go Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}