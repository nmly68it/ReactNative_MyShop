import { AsyncStorage } from 'react-native';
const getCart = async () => {
    try {    
        const cartList = await AsyncStorage.getItem('@cart');
        if (cartList !== null) {         
            return JSON.parse(cartList);
        }        
        return [];
    } catch (error) {
        return [];
    }

    // try {
    //     await AsyncStorage.removeItem('@cart');
    //     return true;
    // }
    // catch(exception) {
    //     return false;
    // }

};

export default getCart;