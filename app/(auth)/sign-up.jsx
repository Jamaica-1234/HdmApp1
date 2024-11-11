// SignIn.js
import { StyleSheet, Text, View, TextInput, Switch, Button } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router'; // Ensure correct import

const SignIn = () => {
  const [isSavePassword, setIsSavePassword] = useState(false); // State for saving password preference
  const router = useRouter(); // Initialize router

  const handleSavePasswordToggle = () => {
    setIsSavePassword(!isSavePassword); // Toggle save password preference
  };

  const handleSignIn = () => {
    // Perform your sign-in logic here (e.g., form validation, API call)
    router.push('/home'); // Navigate to home after successful sign-in
  };

  return (
    <View style={styles.container}>
      <View style={styles.formBox}>
        <Text style={styles.title}>Sign In</Text> {/* Updated to "Sign In" */}

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text> {/* Updated label */}
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text> {/* Updated label */}
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>

        <View style={styles.savePasswordContainer}>
          <Switch
            value={isSavePassword}
            onValueChange={handleSavePasswordToggle}
          />
          <Text style={styles.savePasswordText}>Save password</Text> {/* Retained save password toggle */}
        </View>

        <Button title="Sign In" onPress={handleSignIn} /> {/* Updated to "Sign In" */}
        
        <Text style={styles.link}>
          Don't have an account?{' '}
          <Text style={styles.linkText} onPress={() => router.push('/signup')}>
            Sign up
          </Text>
        </Text> {/* Link to Sign Up page */}
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
    color: 'black',
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
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'black',
    color: 'white',
  },
  savePasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  savePasswordText: {
    marginLeft: 8,
    fontSize: 16,
  },
  link: {
    marginTop: 20,
    fontSize: 16,
  },
  linkText: {
    color: 'blue',
  },
});

export default SignIn;
