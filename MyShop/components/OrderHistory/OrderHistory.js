import React, { Component } from "react";
import { Button, View, Text } from 'react-native';

export default class OrderHistory extends Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>OrderHistory</Text>
                <Button
                    title="Go to Main"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}    