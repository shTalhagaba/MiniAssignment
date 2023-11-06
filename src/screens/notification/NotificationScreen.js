import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {LocalNotifications} from '../../components/LocalNotifications/LocalNotification';

function NotificationScreen(props) {
  const sendNotification = () => {
      LocalNotifications(
        'Testing Notification',
        'This is testing notification body',
      );
  };
  return (
    <View style={styles.container}>
      <View style={styles.padding}>
        <TouchableOpacity
          style={styles.notificationBtn}
          onPress={sendNotification}>
          <Text allowFontScaling={false} style={styles.btnTitle}>
            Notification Button
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default NotificationScreen;
