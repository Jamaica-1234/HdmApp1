import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images, logo } from '../constants';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        
        {/* Title Text */}
        <Text style={styles.titleText}>HDM App</Text>

        {/* Logo Image */}
        {logo && logo.hdm ? (
          <Image source={logo.hdm} style={styles.logo} />
        ) : (
          <Image 
            source={{ uri: 'https://c8.alamy.com/comp/2RCKNFT/hdm-logo-hdm-letter-hdm-letter-logo-design-initials-hdm-logo-linked-with-circle-and-uppercase-monogram-logo-hdm-typography-for-technology-busines-2RCKNFT.jpg' }}
            style={styles.logo} 
          />
        )}

        {/* Description and Slogan */}
        <Text style={styles.appDescription}>
          Discover the best travel experiences with HDM, your ultimate guide to exploring the world!
        </Text>
        
        <Text style={styles.sloganText}>
          "Explore, Dream, Discover!"
        </Text>

        {/* Let's Get Started Button */}
        <TouchableOpacity
          onPress={() => router.push('/sign-up')}
          style={styles.emailButton}
        >
          <Text style={styles.emailButtonText}>Let's Get Started</Text>
        </TouchableOpacity>

        {/* Portfolio Images */}
        <Image
          source={images.logo}
          style={styles.largeImage}
          resizeMode="contain"
        />

        <Image
          source={images.portfolio}
          style={styles.smallImage}
          resizeMode="contain"
        />

      </View>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },
  mainContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: 'black',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 20,
  },
  appDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
    color: 'black',
    paddingHorizontal: 10,
  },
  sloganText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
  },
  emailButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  emailButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  largeImage: {
    width: 300,
    height: 84,
  },
  smallImage: {
    width: 200,
    height: 200,
  },
});

