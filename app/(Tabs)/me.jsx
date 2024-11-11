import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image source={{ uri: 'https://i.pinimg.com/736x/39/6c/78/396c783a58cc0baac75d3aa2910ed3ec.jpg' }} style={styles.profileIcon} />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>LOG IN / SIGN IN</Text>
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <Ionicons name="moon-outline" size={30} color="black" />
          <Ionicons name="star-outline" size={30} color="black" />
        </View>
      </View>

      {/* Content Section */}
      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>CONTENT</Text>
        <View style={styles.contentItem}>
          <Ionicons name="alarm-outline" size={30} color="black" />
          <Text style={styles.contentText}>MY REMINDER</Text>
        </View>
        <View style={styles.contentItem}>
          <Ionicons name="list-outline" size={30} color="black" />
          <Text style={styles.contentText}>MY LIST</Text>
        </View>
        <View style={styles.contentItem}>
          <Ionicons name="download-outline" size={30} color="black" />
          <Text style={styles.contentText}>DOWNLOAD</Text>
        </View>
      </View>

      {/* Preferences Section */}
      <View style={styles.preferencesContainer}>
        <Text style={styles.sectionTitle}>PREFERENCES</Text>
        <View style={styles.preferenceItem}>
          <Ionicons name="settings-outline" size={30} color="black" />
          <Text style={styles.contentText}>SETTINGS</Text>
        </View>
        <View style={styles.preferenceItem}>
          <Ionicons name="language-outline" size={30} color="black" />
          <View>
            <Text style={styles.contentText}>LANGUAGE</Text>
            <Text style={styles.contentText}>ENGLISH</Text>
          </View>
        </View>
        <View style={styles.preferenceItem}>
          <Ionicons name="help-circle-outline" size={30} color="black" />
          <Text style={styles.contentText}>HELP & FEEDBACK</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    paddingBottom: 80,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    borderRadius: 50,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
  },
  contentContainer: {
    backgroundColor: '#E0FFFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  contentText: {
    fontSize: 16,
    color: 'black',
    flex: 1,
  },
  preferencesContainer: {
    backgroundColor: '#E0FFFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  preferenceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});