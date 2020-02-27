import React, { Component } from "react";
import { Image, View, Text, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

import sp1 from './../../../../assets/media/temp/sp1.jpeg';
import sp2 from './../../../../assets/media/temp/sp2.jpeg';
import sp3 from './../../../../assets/media/temp/sp3.jpeg';
import sp4 from './../../../../assets/media/temp/sp4.jpeg';

export default class TopProduct extends Component {
    render() {
        const {
            container, containerTitle, 
            titleStyle, bodyStyle, 
            productContainerStyle, productImage,
            productName, productPrice
        } = styles;
        return (
            <View style={container}>
                <View style={containerTitle}>
                    <Text style={titleStyle}>TOP PRODUCT </Text>
                </View>
                <View>
                <View style={bodyStyle}>
                    <View style={productContainerStyle}>
                        <Image source={sp1} style={productImage}/>
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>400$</Text>
                    </View>
                    <View style={productContainerStyle}>
                        <Image source={sp2} style={productImage}/>
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>250$</Text>
                    </View>

                    <View style={{height: 10, width}}/>

                    <View style={productContainerStyle}>
                        <Image source={sp3} style={productImage}/>
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>400$</Text>
                    </View>
                    <View style={productContainerStyle}>
                        <Image source={sp4} style={productImage}/>
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>250$</Text>
                    </View>
                </View>
                </View>
            </View>
        );
    }
}

const { height, width } = Dimensions.get('window');
const productWidth = (width - 60) / 2;
const productImageHeight = (productWidth / 361) * 452;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    }, 
    containerTitle : {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    }, 
    titleStyle: {
        color: '#D3D3CF', 
        fontSize: 20        
    }, 
    bodyStyle : {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },     
    productContainerStyle : {
        width: productWidth,         
        //marginBottom: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage : {
        width: productWidth,
        height: productImageHeight
    },
    productName : {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500',
        paddingTop: 10
        

    },
    productPrice : {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#C92A62'
    }
});
