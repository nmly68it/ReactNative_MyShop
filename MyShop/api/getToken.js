import { AsyncStorage } from 'react-native';

const getToken = async () => {
    try {    
        const token = await AsyncStorage.getItem('@token');
        if (token !== null) {
            return token;
        }        
        return null;
    } catch (error) {
        return null;
    }
};

export default getToken;