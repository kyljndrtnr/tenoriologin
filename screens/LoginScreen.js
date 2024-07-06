import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.0.95/tenoriologin/php/login.php', {
        username,
        password,
      });
      console.log(response.data);
      if (response.data.message === 'Login successful') {
        navigation.navigate('Home');
      } else {
        Alert.alert('Login Failed', response.data.error || 'Failed to login');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to fetch data from server');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default LoginScreen;
