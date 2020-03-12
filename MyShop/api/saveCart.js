import { AsyncStorage } from 'react-native';
const saveCart = async (cartList) => {
    await AsyncStorage.setItem('@cart', JSON.stringify(cartList));
};

export default saveCart;