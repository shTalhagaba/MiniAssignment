import React, {useEffect} from 'react';
import {Image, Platform, View} from 'react-native';
import styles from './styles';
import { CreateNotificationChannel } from '../../components/LocalNotifications/LocalNotification';

function SplashScreen(props) {
  // const token = useSelector(state => state?.auth?.token);
  useEffect(() => {
    if(Platform.OS === 'android'){
    CreateNotificationChannel();
    }
    setTimeout(() => {
        props.navigation.replace('LoginScreen');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      {/* <SvgUri style={styles.img} source={ImagePath.splashImg} /> */}
    </View>
  );
}

export default SplashScreen;
