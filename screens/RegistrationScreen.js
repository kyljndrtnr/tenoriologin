import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const RegistrationScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://192.168.0.95/tenoriologin/php/register.php', {
        username,
        password,
        email,
      });
      console.log(response.data);
      Alert.alert('Registration', response.data.message || 'Registration failed');
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
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegistrationScreen;
