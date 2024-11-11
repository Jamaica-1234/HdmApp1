import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons

const VipScreen = () => {
  const handleVipPress = () => {
    Alert.alert('SUBSCRIBE!');
  };

  const handleAdFreePress = () => {
    Alert.alert('Congratulations!', 'You are now a VIP member! Enjoy more exclusive offers in the app.');
  };

  const handleDistinguishedStatusPress = () => {
    Alert.alert('Congratulations!', 'You have distinguished status! Enjoy exclusive perks and features.');
  };

  return (
    <View style={styles.container}>
      {/* VIP Image */}
      <TouchableOpacity style={styles.header} onPress={handleVipPress}>
        <Text style={styles.vipText}>VIP</Text>
        <Image
          source={{ uri: 'https://fawp.ua.edu/bamadining/wp-content/uploads/sites/5/2015/06/VIP-logos-01-1024x705.png' }}
          style={styles.vipImage}
        />
      </TouchableOpacity>

      {/* Benefits Section */}
      <View style={styles.benefitsContainer}>
        <TouchableOpacity style={styles.benefitItem} onPress={handleAdFreePress}>
          <Image
            source={{ uri: 'https://blog.solidsignal.com/wp-content/uploads/2018/02/ad_p-480x437.jpg' }}
            style={styles.benefitIcon}
          />
          <Text style={styles.benefitText}>AD-FREE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.benefitItem} onPress={handleDistinguishedStatusPress}>
          <Image
            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/000/356/203/original/vector-ribbon-icon.jpg' }}
            style={styles.benefitIcon}
          />
          <Text style={styles.benefitText}>DISTINGUISHED STATUS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    bottom: 140,
  },
  vipImage: {
    width: 350,
    height: 100,
    resizeMode: 'contain',
    top: 80,
  },
  vipText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    top: 50,
  },
  benefitsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
  },
  benefitItem: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  benefitIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  benefitText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  navText: {
    color: 'white',
    fontSize: 14,
  },
});

export default VipScreen;
