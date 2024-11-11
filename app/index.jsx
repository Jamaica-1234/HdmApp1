import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerText}>HDM App</Text>
        
      </View>
      <Image
        source={{ uri: 'https://c8.alamy.com/comp/2RCKNFT/hdm-logo-hdm-letter-hdm-letter-logo-design-initials-hdm-logo-linked-with-circle-and-uppercase-monogram-logo-hdm-typography-for-technology-busines-2RCKNFT.jpg' }} // Replace with your image URL
        style={styles.image}
      />
      <Text style={styles.appDescription}>
        An app designed for movie buffs that provides a carefully chosen collection of HD or higher quality movies {/* App Description */}
      </Text>
      <Text style={styles.appSlogan}>
        "Your journey begins here!" {/* App Slogan */}
      </Text>
      <View style={styles.buttonContainer}>
        <Link href="/sign-up" style={styles.button}>Let's Get Started</Link>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Added padding for better layout
    position: 'relative', // Necessary for absolute positioning of icons
  },
  header: {
    marginBottom: 20, // Space between header and image
    alignItems: 'center', // Center text horizontally
  },
  headerText: {
    color: 'black',
    fontSize: 24,
  },
  appName: {
    color: 'black',
    fontSize: 28, // Font size for app name
    fontWeight: 'bold', // Bold font for emphasis
  },
  image: {
    width: 100, // Adjust width as needed
    height: 100, // Adjust height as needed
    marginBottom: 20, // Space between image and buttons
    padding: 50,
    borderRadius: 20,
    borderLeftWidth: 40,
    borderRightWidth: 40,
  },
  appDescription: {
    color: 'black',
    fontSize: 16, // Font size for description
    textAlign: 'center', // Centered text
    marginBottom: 10, // Space below description
    paddingHorizontal: 10, // Padding for better readability
  },
  appSlogan: {
    color: 'black',
    fontSize: 16, // Font size for slogan
    fontStyle: 'italic', // Italic style for slogan
    marginBottom: 20, // Space below slogan
  },
  buttonContainer: {
    width: '50%', // Adjust button container width as needed
    textAlign: 'center', 
  },
  button: {
    backgroundColor: 'black', 
    color: 'white', 
    paddingVertical: 8, 
    paddingHorizontal: 16, 
    fontSize: 14, 
    textAlign: 'center', 
    marginBottom: 10, 
    borderRadius: 5, 
    display: 'inline-block', 
  },
  topLeftIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  bottomRightIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
