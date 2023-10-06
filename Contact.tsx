import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

const Contact = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');

  const submit = () => {
    if (userName === 'MUQADUS' && userPass === 'M@87654321') {
      Alert.alert('Success', 'Login successful', [
        { text: 'OK', onPress: () => navigation.navigate('Home') },
      ]);
    } else {
      Alert.alert('Error', 'Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login Form</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={userName}
          onChangeText={(value) => setUserName(value)}
          keyboardType="email-address"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={userPass}
          onChangeText={(value) => setUserPass(value)}
          secureTextEntry={true}
        />
        <Button title="Submit" onPress={submit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 40,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default Contact;
