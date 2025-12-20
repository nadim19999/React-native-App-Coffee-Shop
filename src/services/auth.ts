import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveUser = async (user: any) => {
  await AsyncStorage.setItem('user', JSON.stringify(user));
};

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`http://10.0.2.2:3000/users?email=${email}&password=${password}`);
    const users = await response.json();

    if (users.length > 0) {
      const user = users[0];
      console.log('Logged in user:', user);
      await AsyncStorage.setItem('user', JSON.stringify(user));
      return user;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Login error:', error);
    return null;
  }
};


export const getUser = async () => {
  const user = await AsyncStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};


export const logout = async () => {
  await AsyncStorage.removeItem('user');
};