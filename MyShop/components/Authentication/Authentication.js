import React, { Component } from "react";
import { Button, View, Text } from 'react-native';

export default class Authentication extends Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Authentication</Text>
                <Button
                    title="Go to Main"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}    