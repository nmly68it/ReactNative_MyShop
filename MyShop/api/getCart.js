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
};

export default getCart;