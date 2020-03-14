import { AsyncStorage } from 'react-native';

const deleteToken = async () => {
    try {
        await AsyncStorage.removeItem('@token');
        return true;
    }catch(exception) {
        return false;        
    }
};
export default deleteToken;