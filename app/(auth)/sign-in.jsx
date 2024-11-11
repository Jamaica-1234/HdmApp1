// SignIn.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
  const router = useRouter(); // Initialize router

  const handleSignIn = () => {
    // Perform sign-in logic here

    // Navigate to the "Home" screen after successful sign-in
    router.push('/home');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formBox}>
        <Text style={styles.title}>Sign In</Text> {/* Updated the title to "Sign In" */}

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry={!passwordVisible} // Show/hide password based on state
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
              <Icon name={passwordVisible ? 'visibility' : 'visibility-off'} size={24} color="white" /> {/* Icon color set to white */}
            </TouchableOpacity>
          </View>
        </View>

        <Button title="Sign In" onPress={handleSignIn} /> {/* Updated button text to "Sign In" */}
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
    backgroundColor: '#f5f5f5',
  },
  formBox: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#00FFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  input: {
    width: '100%',
    padding: 10,
    paddingRight: 40, // Space for the icon
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'black',
    color: 'white',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative', // Allow absolute positioning of the icon
  },
  eyeIcon: {
    position: 'absolute', // Position icon absolutely within the input field
    right: 10, // Position it 10 units from the right
    top: '50%', // Center it vertically
    transform: [{ translateY: -12 }], // Adjust for vertical alignment
  },
});

export default SignIn;
