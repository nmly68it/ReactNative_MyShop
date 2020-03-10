import React, { Component } from "react";
import { Image, View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

const url = 'http://192.168.1.54/api/images/product/';
export default class TopProduct extends Component {
    goToProductDetail(product){
        this.props.navigation.navigate('ProductDetail', {
            product: product
        });
    }

    render() {
        const {
            container, containerTitle,
            titleStyle, bodyStyle,
            productContainerStyle, productImage,
            productName, productPrice
        } = styles;
        const { topProducts } = this.props;
        return (
            <View style={container}>
                <View style={containerTitle}>
                    <Text style={titleStyle}>TOP PRODUCT </Text>
                </View>
                <View>
                    <View style={bodyStyle}>
                        {
                            topProducts.map(product => (
                                <TouchableOpacity style={productContainerStyle} onPress={() => this.goToProductDetail(product)} key={product.id}>
                                    <Image source={{ uri: `${url}${product.images[0].replace('.jpeg', '.jpg')}` }} style={productImage} />
                                    <Text style={productName}>{product.name.toUpperCase()}</Text>
                                    <Text style={productPrice}>{product.price}$</Text>
                                </TouchableOpacity>
                            ))
                        }
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
    containerTitle: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    titleStyle: {
        color: '#D3D3CF',
        fontSize: 20
    },
    bodyStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productContainerStyle: {
        width: productWidth,
        //marginBottom: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: productWidth,
        height: productImageHeight
    },
    productName: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500',
        paddingTop: 10


    },
    productPrice: {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#C92A62'
    }
});
