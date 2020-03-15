import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, FlatList } from 'react-native';

import backListIcon from '../../../../assets/media/appIcon/backList.png';
import sp1 from '../../../../assets/media/temp/sp1.jpeg';
import getListProduct from './../../../../api/getListProduct';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
const url = 'http://192.168.1.54/api/images/product/';

export default class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            page: 1,
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true }, this.getData);
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    goToProductDetail(product){        
        this.props.navigation.push('ProductDetail', {product});
    }

    getData = async () => {
        const { category } = this.props.route.params;
        let { page } = this.state;
        getListProduct(category.id, page)
            .then((resJson) => {
                this.setState({
                    data: this.state.data.concat(resJson),    
                    //data: resJson,
                    page: page + 1
                });
            }).finally(() => {
                this.setState({
                    isLoading: false
                });
            });
    }

    renderRow = ({ item }) => {
        const {
            productContainer,
            productInfo, productImage, lastRowInfo,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail
        } = styles;
        return (
            <View style={productContainer}>            
                <Image source={{ uri: `${url}${item.images[0].replace('.jpeg', '.jpg')}` }} style={productImage} />
                <View style={productInfo}>
                    <Text style={txtName}>{toTitleCase(item.name)}</Text>
                    <Text style={txtPrice}>{item.price}$</Text>
                    <Text style={txtMaterial}>Material {item.material}</Text>
                    <View style={lastRowInfo}>
                        <Text style={txtColor}>{item.color}</Text>
                        <View style={{ backgroundColor: 'cyan', width: 16, height: 16, borderRadius: 8 }} />
                        <TouchableOpacity onPress={() => this.goToProductDetail(item)}>
                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        const {
            container, header, wrapper,
            backIconStyle, titleStyle
        } = styles;
        const { category } = this.props.route.params;
        let { data, isLoading } = this.state;
        return (
            <View style={container}>
                <View style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack}>
                            <Image source={backListIcon} style={backIconStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>{category.name}</Text>
                        <View style={{ width: 30 }} />
                    </View>

                    <FlatList
                        data={data}
                        renderItem={this.renderRow}
                        keyExtractor={(item, index) => index.toString()}
                        refreshing={isLoading}
                        onRefresh={this.getData}
                    // onEndReached={this.handleLoadMore}
                    // onEndReachedThreshold={0}
                    // ListFooterComponent={this.renderFooter}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8',
        padding: 10
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
        //backgroundColor: '#FFF'
    },
    wrapper: {
        backgroundColor: '#FFF',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        paddingHorizontal: 10
    },
    backIconStyle: {
        width: 30,
        height: 30
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 20
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderTopWidth: 1
    },
    productInfo: {
        justifyContent: "space-between",
        marginLeft: 15,
        flex: 1,
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#BCBCBC',
        fontSize: 20,
        fontWeight: '400'

    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#B10D65'
    },
    txtMaterial: {
        fontFamily: 'Avenir',
    },
    txtColor: {
        fontFamily: 'Avenir',
    },
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 11
    }
});