import React, { Component } from "react";
import { Image, View, Text, Dimensions, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import littleIcon from './../../../../assets/media/temp/little.jpg';
import maxiIcon from './../../../../assets/media/temp/maxi.jpg';
import partyIcon from './../../../../assets/media/temp/party.jpg';

const { height, width } = Dimensions.get('window');

export default class Category extends Component {

    goListProduct = () => {
        this.props.navigation.navigate('ListProduct');
    }

    render() {
        const { wrapper, textStyle, imageStyle, categoryTitleStyle } = styles;
        return (
            <View style={wrapper} >
                <View style={{ justifyContent: 'center', height: 50 }}>
                    <Text style={textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 4 }}>
                    <Swiper autoplay={true}>
                        <TouchableOpacity onPress={this.goListProduct}>
                            <ImageBackground source={littleIcon} style={imageStyle}>
                                <Text style={categoryTitleStyle}>Maxi Dress</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goListProduct}>
                            <ImageBackground source={maxiIcon} style={imageStyle}>
                                <Text style={categoryTitleStyle}>Maxi Dress</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goListProduct}>
                            <ImageBackground source={partyIcon} style={imageStyle}>
                                <Text style={categoryTitleStyle}>Maxi Dress</Text>
                            </ImageBackground>
                        </TouchableOpacity>
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