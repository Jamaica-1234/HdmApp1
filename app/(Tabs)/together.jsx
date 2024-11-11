import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [result, setResult] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSearch = () => {
    setResult(searchText);
    setSearchText('');
  };

  const showModal = (message) => {
    setModalMessage(message);
    setModalVisible(true);
  };

  const handleCreateRoom = () => {
    showModal('Creating a room...');
  };

  const handleChatParty = () => {
    showModal('Entering chat party...');
  };

  const handleJoinRoom = () => {
    showModal('Joining a room...');
  };

  const handleCreateGroup = () => {
    showModal('Creating a group...');
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Top Title */}
      <Text style={styles.title}>TOGETHER IS COMING</Text>

      {/* Emoji Image */}
      <Image
        source={{ uri: 'https://thumbs.dreamstime.com/z/%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D1%85%D0%B0%D1%80%D0%B0%D0%BA%D1%82%D0%B5%D1%80%D0%B0-%D0%B4%D1%80%D1%83%D0%B7%D0%B5%D0%B9-%D1%81%D0%BC%D0%B0%D0%B9%D0%BB%D0%B8%D0%BA%D0%B8-emoji-%D0%BA%D1%80%D1%83%D1%82%D0%BE-%D0%BE%D1%87%D0%BA%D0%B8-%D1%81-%D1%81%D0%BC%D0%B0%D0%B9%D0%BB%D0%B8%D0%BA-191949946.jpg' }}
        style={styles.emojiImage}
      />

      {/* Search Bar and Create Room */}
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchBar}
          placeholder="search"
          placeholderTextColor="#fff"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.createRoomButton} onPress={handleCreateRoom}>
          <Text style={styles.createRoomText}>CREATE ROOM</Text>
        </TouchableOpacity>
      </View>

      {/* Display Search Result */}
      {result ? (
        <Text style={styles.resultText}>You searched for: {result}</Text>
      ) : null}

      {/* Chat Party and Join Room */}
      <View style={styles.optionSection}>
        <TouchableOpacity style={styles.chatPartyButton} onPress={handleChatParty}>
          <Text style={styles.optionText}>CHAT PARTY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.joinRoomButton} onPress={handleJoinRoom}>
          <Text style={styles.optionText}>JOIN IN ROOM</Text>
        </TouchableOpacity>
      </View>

      {/* Create Group */}
      <TouchableOpacity style={styles.createGroupButton} onPress={handleCreateGroup}>
        <Text style={styles.optionText}>CREATE GROUP</Text>
      </TouchableOpacity>

      {/* Modal for Messages */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
  },
  emojiImage: {
    width: 200,
    height: 150,
    marginVertical: 20,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    padding: 10,
  },
  searchBar: {
    width: '70%',
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
    color: '#fff',
  },
  createRoomButton: {
    backgroundColor: '#38b6ff',
    padding: 10,
    borderRadius: 25,
  },
  createRoomText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 18,
    color: '#000',
    marginTop: 10,
  },
  optionSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginVertical: 20,
  },
  chatPartyButton: {
    backgroundColor: '#ffb703',
    padding: 15,
    borderRadius: 25,
  },
  joinRoomButton: {
    backgroundColor: '#fb8500',
    padding: 15,
    borderRadius: 25,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createGroupButton: {
    backgroundColor: '#8ecae6',
    padding: 15,
    borderRadius: 25,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#38b6ff',
    padding: 10,
    borderRadius: 25,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
