import React, { Component } from "react";
import { Button, View, Text } from 'react-native';

export default class Home extends Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
                <Text>Home Component</Text>               
            </View>
        );
    }
}    