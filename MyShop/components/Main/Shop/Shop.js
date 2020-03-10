import React, { Component } from "react";
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Contact from './Contact/Contact';
import Header from './Header';


import homeIconSelected from './../../../assets/media/appIcon/home.png';
import homeIcon from './../../../assets/media/appIcon/home0.png';

import cartIconSelected from './../../../assets/media/appIcon/cart.png';
import cartIcon from './../../../assets/media/appIcon/cart0.png';

import searchIconSelected from './../../../assets/media/appIcon/search.png';
import searchIcon from './../../../assets/media/appIcon/search0.png';

import contactIconSelected from './../../../assets/media/appIcon/contact.png';
import contactIcon from './../../../assets/media/appIcon/contact0.png';

const { height } = Dimensions.get('window');
const Tab = createBottomTabNavigator();

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            productTypes: [],
            topProducts: []
        });
    }

    openMenu = () => {
        this.props.navigation.openDrawer();
    }

    componentDidMount() {
        fetch('http://192.168.1.54/api/')
            .then(res => res.json())
            .then(resJSON => {
                const { type, product } = resJSON;
                this.setState({
                    productTypes: type,
                    topProducts: product
                });
            });
    }


    // getTabImageIcon = ({ imageIcon }) => {
    //     return (<Image
    //         source={imageIcon}
    //         resizeMode='contain'
    //         style={{ width: 30, height: 30 }}
    //     />
    //     );
    // }
    // getTabBarIcon = ({route}) {}

    render() {
        const { navigation } = this.props;
        const { productTypes, topProducts } = this.state;
        const { tabBarIconStyle } = styles;
        //console.log("Product type : " + productTypes);
        return (
            <View style={{ flex: 1 }}>
                <Header navigation={navigation} />
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            if (route.name === 'Home') {
                                return (<Image
                                    source={focused ? homeIconSelected : homeIcon}
                                    resizeMode='contain'
                                    style={tabBarIconStyle}
                                />);
                            } if (route.name === 'Cart') {
                                return (<Image
                                    source={focused ? cartIconSelected : cartIcon}
                                    resizeMode='contain'
                                    style={tabBarIconStyle}
                                />);
                            } if (route.name === 'Search') {
                                return (<Image
                                    source={focused ? searchIconSelected : searchIcon}
                                    resizeMode='contain'
                                    style={tabBarIconStyle}
                                />);
                            } if (route.name === 'Contact') {
                                return (<Image
                                    source={focused ? contactIconSelected : contactIcon}
                                    resizeMode='contain'
                                    style={tabBarIconStyle}
                                />);
                            }
                        }
                    })}
                    tabBarOptions={{
                        activeTintColor: '#34B089',
                        labelStyle: {
                            fontFamily: 'Avenir'
                        }
                    }}
                >
                    {/* <Tab.Screen name="Home" component={Home} /> */}
                    <Tab.Screen name="Home">
                        {props => <Home {...props} productTypes={productTypes} topProducts={topProducts}/>}
                    </Tab.Screen>

                    <Tab.Screen name="Cart" component={Cart} />
                    <Tab.Screen name="Search" component={Search} />
                    <Tab.Screen name="Contact" component={Contact} />
                </Tab.Navigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabBarIconStyle: {
        width: 30,
        height: 30
    }
});
