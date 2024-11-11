import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const LibraryScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>LIBRARY</Text>
        <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersContainer}>
        {/* Filter categories */}
        <View style={styles.filtersRow}>
          <Text style={styles.filterText}>TV SERIES</Text>
          <Text style={styles.filterText}>MOVIE</Text>
          <Text style={styles.filterText}>ANIME</Text>
        </View>
        <View style={styles.filtersRow}>
          <Text style={styles.filterText}>ALL REGIONS</Text>
          <Text style={styles.filterText}>AMERICA</Text>
          <Text style={styles.filterText}>KOREA</Text>
          <Text style={styles.filterText}>UK</Text>
        </View>
        <View style={styles.filtersRow}>
          <Text style={styles.filterText}>ALL CATEGORIES</Text>
          <Text style={styles.filterText}>DRAMA</Text>
          <Text style={styles.filterText}>ACTION</Text>
          <Text style={styles.filterText}>ROMANCE</Text>
        </View>
        <View style={styles.filtersRow}>
          <Text style={styles.filterText}>ALL TIME PERIODS</Text>
          <Text style={styles.filterText}>2022</Text>
          <Text style={styles.filterText}>2021</Text>
          <Text style={styles.filterText}>2020</Text>
        </View>
        <View style={styles.filtersRow}>
          <Text style={styles.filterText}>ALL SUBTITLES</Text>
          <Text style={styles.filterText}>MANUAL TRANSLATION</Text>
        </View>
        <View style={styles.filtersRow}>
          <Text style={styles.filterText}>RECENT</Text>
          <Text style={styles.filterText}>POPULARITY</Text>
        </View>
      </ScrollView>

      <View style={styles.moviesContainer}>
        {/* Movie cards */}
        <View style={styles.movieCard}>
          <Image
            source={{ uri: 'https://asianwiki.com/images/9/9b/Vengeance_of_the_Bride-p1.jpg' }}
            style={styles.movieImage}
          />
          <Text style={styles.movieTitle}>VENGEANCE OF THE BRIDE</Text>
        </View>
        <View style={styles.movieCard}>
          <Image
            source={{ uri: 'https://m.media-amazon.com/images/M/MV5BNzUyZDMyMmMtMmY5Yy00ZDM3LTkyZmYtMDAxM2U3NTBhYzg3XkEyXkFqcGdeQXVyOTcxNzY0NTA@._V1_.jpg' }}
            style={styles.movieImage}
          />
          <Text style={styles.movieTitle}>DRAGON AGE: ABSOLUTION</Text>
        </View>
        <View style={styles.movieCard}>
          <Image
            source={{ uri: 'https://images.justwatch.com/poster/150363008/s718' }}
            style={styles.movieImage}
          />
          <Text style={styles.movieTitle}>HEARTLAND SEASON 13</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    paddingTop: 50,
  },
  filterText: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 20,
    marginBottom: 10,
    width: '100%', 
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  searchIcon: {
    position: 'absolute', 
    right: 20, 
    top: '50%', 
    transform: [{ translateY: -12 }], 
  },
  filtersContainer: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  filtersRow: {
    flexDirection: 'column',
    marginBottom: 1,
    top: 0.4,
  },
  moviesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    flexWrap: 'wrap', // Allow cards to wrap in case of overflow
  },
  movieCard: {
    alignItems: 'center',
    marginBottom: 20, // Add spacing between rows of movie cards
  },
  movieImage: {
    width: 100,
    height: 150,
  },
  movieTitle: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 5, // Add margin for better spacing
  },
});

export default LibraryScreen;
