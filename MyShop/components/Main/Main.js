import React, { Component } from "react";
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Shop from './Shop/Shop';
import Menu from './Menu';
import OrderHistory from './../OrderHistory/OrderHistory';
import ChangeInfo from './../ChangeInfo/ChangeInfo';
import Authentication from './../Authentication/Authentication';

const Drawer = createDrawerNavigator();

export default class Main extends Component{
    render() {
        return (
         //   <NavigationContainer>
                <Drawer.Navigator initialRouteName="Shop">
                    <Drawer.Screen name="Shop" component={Shop} />
                    <Drawer.Screen name="OrderHistory" component={OrderHistory} />
                    <Drawer.Screen name="ChangeInfo" component={ChangeInfo} />
                    <Drawer.Screen name="Authentication" component={Authentication} />

                    {/* <Drawer.Screen name="Menu" component={Menu} /> */}
                </Drawer.Navigator>
         //   </NavigationContainer>


            // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            //     <Text>Main</Text>
            //     <Button
            //         title="Go to Authentication"
            //         onPress={() => this.props.navigation.navigate('Authentication')}
            //     />
            //     <Button
            //         title="Go to ChangeInfo"
            //         onPress={() => this.props.navigation.navigate('ChangeInfo')}
            //     />
            //     <Button
            //         title="Go to OrderHistory"
            //         onPress={() => this.props.navigation.navigate('OrderHistory')}
            //     />
            // </View>
        );
    }
}    