import React, { Component } from "react";
import { View, Text, ScrollView } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class Home extends Component{
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Collection/>
                <Category/>
                <TopProduct/>
            </ScrollView>
        );
    }
}    

// const styles = StyleSheet.create({
//     tabBarIconStyle: {
//         width: 30,
//         height: 30
//     }
// });
