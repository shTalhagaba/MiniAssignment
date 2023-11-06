import React, {useEffect, useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import ImagePath from '../../common/ImagePath';
import Header from '../../components/Headers/Header';
import Input from '../../components/TextInput/Input';
import Button from '../../components/Buttons/Button';
import Loader from '../../components/Loader/Loader';
import Strings from '../../common/Strings';

const isValidEmail = email => {
  // You can use a regular expression or a more complex email validation library
  // This is a basic example
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

function LoginScreen(props) {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   // return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) return null;
  const isStrongPassword = password => {
    // Define a regular expression to check for at least one special character and one number
    const regex = /^(?=.*[!@#$%^&*])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  const handleLogin = async () => {
    //   auth()
    // .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
    // .then(() => {
    //   console.log('User account created & signed in!');
    // })
    // .catch(error => {
    //   if (error.code === 'auth/email-already-in-use') {
    //     console.log('That email address is already in use!');
    //   }

    //   if (error.code === 'auth/invalid-email') {
    //     console.log('That email address is invalid!');
    //   }

    //   console.error(error);
    // });
    if (!isValidEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
    } else if (!isStrongPassword(password)) {
      Alert.alert(
        'Weak Password',
        'Password must be at least 8 characters long and contain at least one special character and one number.',
      );
    } else {
      // Implement your authentication logic here
      setError('');
      props.navigation.navigate('NotificationScreen');
    }
  };
  const validationButton = () => {
    handleLogin();
  };

  return (
    <View style={styles.container}>
      <View style={styles.padding}>
        <Header imageStyle={styles.headerImg} />

        <Text allowFontScaling={false} style={styles.login}>
          {Strings.login}
        </Text>

        <Text allowFontScaling={false} style={styles.letStarted}>
          {Strings.letsGetStarted}
        </Text>

        <Text allowFontScaling={false} style={styles.error}>
          {error}
        </Text>
        <Input
          icon={ImagePath.email}
          value={email}
          placeholder={Strings.email}
          onChangeText={_ => setEmail(_)}
        />
        <Input
          icon={ImagePath.lock}
          value={password}
          placeholder={Strings.password}
          secureTextEntry={true}
          onChangeText={_ => setPassword(_)}
        />
        <TouchableOpacity style={styles.forgetPasswordBtn}>
          <Text allowFontScaling={false} style={styles.forgetPassword}>
            {Strings.forgotPassword}
          </Text>
        </TouchableOpacity>
        <Button
          btnTitle={Strings.login}
          onPress={() => validationButton()}
          containerStyle={{marginTop: 30}}
        />
        <Text style={styles.noAccount} allowFontScaling={false}>
          {Strings.doNothaveAccount}
          <Text
            allowFontScaling={false}
            style={styles.signUp}
            onPress={() => navigation.navigate('SignUpScreen')}>
            {Strings.signup}
          </Text>
        </Text>
      </View>
      <Text style={styles.terms}>{Strings.privacyPolicyText}</Text>
      {loading && <Loader />}
    </View>
  );
}

export default LoginScreen;
