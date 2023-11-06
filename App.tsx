import React from 'react';
// import 'react-native-gesture-handler';

// Local Import
import Navigation from './src/navigation/Navigation';
import { initializeApp } from '@react-native-firebase/app';
import { firebase } from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBVfJX2si1qt7Gq6y4_tCU0HsSJgT2QCWI",
  authDomain: "miniassignment-e2cb0.firebaseapp.com",
  projectId: "miniassignment-e2cb0",
  storageBucket: "miniassignment-e2cb0.appspot.com",
  messagingSenderId: "402945734237",
  appId: "1:402945734237:android:23b10d7d2a3fefcd94ffb4",
};


const App = () => {
  firebase.initializeApp(firebaseConfig)

  return (
    <>
          <Navigation />
    </>
  );
};

export default App;
