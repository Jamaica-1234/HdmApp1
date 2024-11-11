import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons

export default function App() {
  const handletogether = () => {
    // Perform any logic here for the "Together" button
    console.log('Together button pressed');
  };

  return (
    <View style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.topNav}>
        <Text style={styles.topNavItem}>HOME</Text>
        <Text style={styles.topNavItem}>TOGETHER</Text>
        <Text style={styles.topNavItem}>KDRAMA</Text>
        <Text style={styles.topNavItem}>MOVIE</Text>
        <Text style={styles.topNavItem}>ANIME</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} placeholder="WEDNESDAY" placeholderTextColor="#fff" />
        <Ionicons name="search" size={24} color="black" style={styles.icon} />
        <Ionicons name="options" size={24} color="black" style={styles.icon} />
      </View>

       {/* Featured Image */}
       <View style={styles.featuredContainer}>
        <Image source={{ uri: 'https://m.media-amazon.com/images/M/MV5BM2ZmMjEyZmYtOGM4YS00YTNhLWE3ZDMtNzQxM2RhNjBlODIyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg' }} style={styles.featuredImage} />
      </View>

      {/* Trending Section */}
      <ScrollView horizontal={true} style={styles.trendingSection}>
        <View style={styles.movieCard}>
          <Image source={{ uri: 'https://images.squarespace-cdn.com/content/v1/56047552e4b00047c4e83900/1645219837105-UMTXBJDCZY3YX47OAJAZ/Texas+Chainsaw+Massacre+2022+Poster.jpg' }} style={styles.movieImage} />
          <Text style={styles.movieTitle}>TEXAS MASSACRE</Text>
        </View>
        <View style={styles.movieCard}>
          <Image source={{ uri: 'https://2.bp.blogspot.com/-Wq6O6717dQo/UUnaLXYZraI/AAAAAAAAAcY/D0IAt42Mgss/s1600/Wrong+Turn+3+poster.jpg' }} style={styles.movieImage} />
          <Text style={styles.movieTitle}>WRONG TURN</Text>
        </View>
        <View style={styles.movieCard}>
          <Image source={{ uri: 'https://www.newdvdreleasedates.com/images/posters/large/evil-dead-2013-09.jpg' }} style={styles.movieImage} />
          <Text style={styles.movieTitle}>EVIL DEAD</Text>
        </View>
        <View style={styles.movieCard}>
          <Image source={{ uri: 'https://image.tmdb.org/t/p/original/zZZe5wn0udlhMtdlDjN4NB72R6e.jpg' }} style={styles.movieImage} />
          <Text style={styles.movieTitle}>CABIN IN THE WOODS</Text>
        </View>
        <View style={styles.movieCard}>
          <Image source={{ uri: 'https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/itposter-881369.jpg' }} style={styles.movieImage} />
          <Text style={styles.movieTitle}>IT</Text>
        </View>
        <View style={styles.movieCard}>
          <Image source={{ uri: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/05/unhuman-poster.jpg' }} style={styles.movieImage} />
          <Text style={styles.movieTitle}>UNHUMAN</Text>
        </View>
        <View style={styles.movieCard}>
          <Image source={{ uri: 'https://fr.web.img2.acsta.net/pictures/22/09/29/08/42/5363876.jpg' }} style={styles.movieImage} />
          <Text style={styles.movieTitle}>SMILE</Text>
        </View>
        <View style={styles.movieCard}>
          <Image source={{ uri: 'https://image.tmdb.org/t/p/original/o4f1u5KvUHarysQIrmicg3loUDE.jpg' }} style={styles.movieImage} />
          <Text style={styles.movieTitle}>ANNABELLE</Text>
        </View>
        {/* Add more movie cards as needed */}
      </ScrollView>


        
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    paddingTop: 50,
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'cyan',
    paddingVertical: 10,
  },
  topNavItem: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'ProtestGuerrilla-Regular',
  },
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  searchBar: {
    backgroundColor: 'black',
    width: '70%',
    padding: 10,
    borderRadius: 10,
    color: '#fff',
  },
  icon: {
    marginHorizontal: 10,
  },
  featuredContainer: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
  },
  featuredImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  trendingSection: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  movieCard: {
    width: 120,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  movieImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  movieTitle: {
    fontSize: 12,
    color: '#000',
    marginTop: 5,
    textAlign: 'center',
    fontFamily: 'ProtestGuerrilla-Regular',
  },
 
 
  navText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'ProtestGuerrilla-Regular',
    marginTop: 5,
  },
});
