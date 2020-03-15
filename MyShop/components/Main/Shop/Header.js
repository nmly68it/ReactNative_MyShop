import React, { Component } from "react";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import icLogo from './../../../assets/media/appIcon/ic_logo.png';
import icMenu from './../../../assets/media/appIcon/ic_menu.png';
import searchProduct from './../../../api/searchProduct';
import global from './../../global';

const { height } = Dimensions.get('window');
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSearch : ''
        }
    }

    openMenu = () => {
        this.props.navigation.openDrawer();
    }

    goSearch = () => {
        const {navigation} = this.props;
        navigation.navigate('Search');
    }

    searchProduct = () => {
        const {txtSearch} = this.state;
        searchProduct(txtSearch)
        .then(productList => global.setProductSearchResult(productList))
        .catch(err => console.log(err));
    }

    render() {
        let { container, iconStyle, textInput, row1, titleStyle} = styles;
        return (
            <View style={container}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.openMenu}>
                        <Image source={icMenu} style={iconStyle}/>
                    </TouchableOpacity>
                    <Text style={titleStyle}>Wearing a Dress</Text>
                    <Image source={icLogo} style={iconStyle}/>
                </View>
                <TextInput 
                    onFocus={this.goSearch}
                    style={textInput}
                    onChangeText={text => this.setState({txtSearch : text})}
                    placeholder='What do you want buy?'
                    onSubmitEditing={this.searchProduct}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: height / 8,
        backgroundColor: '#34B089',
        padding: 10,
        justifyContent: 'space-around'
    },
    row1 : {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },    
    iconStyle: {
        width: 25, 
        height: 25
    },
    textInput : {
        height: height/23,
        backgroundColor: '#FFF',
        paddingLeft: 10
    },
    titleStyle: {
        color: '#FFF',
        fontFamily: 'Avenir',
        fontSize: 20
    }
});
