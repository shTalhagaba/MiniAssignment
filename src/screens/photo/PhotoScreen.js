import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Loader from '../../components/Loader/Loader';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {firebase} from '@react-native-firebase/auth';
import '@react-native-firebase/storage';

function PhotoScreen(props) {
  const {navigation} = props;
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const uploadFile = async blob => {
    setLoading(true);
    const storageRef = firebase.storage().ref('test');
    try {
      const uploadTaskSnapshot = await storageRef.put(blob);
      const downloadURL = await storageRef.getDownloadURL();
      console.log('Download URL:', downloadURL);
      setImageUrl(downloadURL);
      setLoading(false);
      return downloadURL; // Return the download URL
    } catch (error) {
      setLoading(false);
      // Handle any errors that occurred during the upload process
      console.error('Error uploading file:', error);
      throw error; // Rethrow the error to handle it further up the call stack
    }
  };

  const uriToBlob = uri => {
    return new Promise((resolve, reject) => {
      fetch(uri)
        .then(response => response.blob())
        .then(blob => {
          resolve(blob);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  const handleOnPress = async () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        // path: 'images',
      },
    };

    try {
      const result = await launchImageLibrary(options);
      if (!result.cancelled && result.assets.length > 0) {
        // User picked an image
        const {height, width, type, uri} = result.assets[0];
        console.log('Selected image:', {height, width, type, uri});

        // Convert the selected image's URI to a blob
        uriToBlob(uri)
          .then(blob => {
            if (!blob) {
              const error = new Error('Blob is null or undefined.');
              console.error(error);
              throw error;
            }
            console.log('Blob:', blob);

            // Upload the blob to Firebase Storage
            let url = uploadFile(blob);
            console.log('File url:', url);
          })
          .then(snapshot => {
            console.log('File uploaded:', snapshot);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      } else {
        console.log('User cancelled image picker');
      }
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  };

  const handleCameraPress = async () => {
    let options = {
      mediaType: 'photo', // Set the media type to 'photo' for camera capture
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Take Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        // path: 'images',
      },
    };

    try {
      const result = await launchCamera(options);

      if (!result.cancelled) {
        // User took a photo
        const {height, width, type, uri} = result.assets[0];
        console.log('Captured photo:', {height, width, type, uri});

        // Convert the captured photo's URI to a blob
        uriToBlob(uri)
          .then(blob => {
            if (!blob) {
              const error = new Error('Blob is null or undefined.');
              console.error(error);
              throw error;
            }
            console.log('Blob:', blob);

            // Upload the blob to Firebase Storage
            let url = uploadFile(blob);
            console.log('File url:', url);
          })
          .then(snapshot => {
            console.log('File uploaded:', snapshot);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      } else {
        console.log('User cancelled camera capture');
      }
    } catch (error) {
      console.error('Error capturing photo:', error);
    }
  };

  // To use the camera, call the function like this:
  // handleCameraPress();

  return (
    <View style={styles.container}>
      {/* Display the image if imageUrl is not null */}
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: 100,
        }}>
        {imageUrl && imageUrl != '' && (
          <Image
            source={{
              uri: imageUrl
                ? imageUrl
                : 'https://firebasestorage.googleapis.com/v0/b/miniassignment-e2cb0.appspot.com/o/test?alt=media&token=55599e4c-4f10-46e2-8d0e-572a921edf79',
            }}
            style={{width: 200, height: 200, alignSelf: 'center'}} // Set the desired dimensions
          />
        )}
      </View>
      <View style={styles.padding}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => handleOnPress()}>
          <Text style={styles.btnTitle}>Choose Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button]}
          onPress={() => handleCameraPress()}>
          <Text style={styles.btnTitle}>Choose Photo from Camera</Text>
        </TouchableOpacity>
      </View>
      {loading && <Loader />}
    </View>
  );
}

export default PhotoScreen;
