import React, { Component } from "react";
import { View, Text } from 'react-native';
import Collection from './Collection';
import Category from './Category';

export default class Home extends Component{
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Collection/>
                <Category/>
            </View>
        );
    }
}    

// const styles = StyleSheet.create({
//     tabBarIconStyle: {
//         width: 30,
//         height: 30
//     }
// });
