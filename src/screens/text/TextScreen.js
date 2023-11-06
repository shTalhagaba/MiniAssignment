import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Loader from '../../components/Loader/Loader';
import { getFirestore, collection, addDoc } from '@react-native-firebase/firestore';

function TextScreen(props) {
  const { navigation } = props;
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState('');

  const db = getFirestore(); // Access the Firebase Firestore instance

  const handleOnPress = async () => {
    try {
      // Reference to the Firestore collection where you want to save the text
      const textCollectionRef = collection(db, 'yourCollectionName'); // Replace with your collection name

      // Add the inputText to the collection
      await addDoc(textCollectionRef, {
        text: inputText,
      });

      // Clear the input field after saving
      // setInputText('');
      console.log('Input Text saved in Firestore:', inputText);
    } catch (error) {
      console.error('Error saving text in Firestore:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.padding}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => setInputText(text)}
          value={inputText}
        />
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => handleOnPress()}
        >
          <Text style={styles.btnTitle}>submit text</Text>
        </TouchableOpacity>

      </View>
      {loading && <Loader />}
    </View>
  );
}

export default TextScreen;
