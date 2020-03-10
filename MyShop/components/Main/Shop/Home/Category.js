import React, { Component } from "react";
import { Image, View, Text, Dimensions, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const { height, width } = Dimensions.get('window');
const url = 'http://192.168.1.54/api/images/type/';

export default class Category extends Component {

    goListProduct = () => {
        this.props.navigation.navigate('ListProduct');
    }

    render() {
        const { wrapper, textStyle, imageStyle, categoryTitleStyle } = styles;
        const { productTypes } = this.props;        
        return (
            <View style={wrapper} >
                <View style={{ justifyContent: 'center', height: 50 }}>
                    <Text style={textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 4 }}>
                    <Swiper autoplay={true}>
                        {
                            productTypes.map(item => (
                                <TouchableOpacity onPress={this.goListProduct} key={item.id}>
                                    <ImageBackground source={{url: `${url}${item.image}`}} style={imageStyle}>
                                        <Text style={categoryTitleStyle}>{item.name}</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            ))
                        }
                    </Swiper>
                </View>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 425;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.3,
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        justifyContent: "center",
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryTitleStyle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#9A9A9A'
    }
});