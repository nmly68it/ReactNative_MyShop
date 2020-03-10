import React, { Component } from "react";
import { View, Text, ScrollView } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class HomeView extends Component{
    render() {
        const { productTypes } = this.props;        
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Collection/>
                <Category productTypes={productTypes} navigation={this.props.navigation}/>
                <TopProduct navigation={this.props.navigation}/>
            </ScrollView>
        );
    }
}    

