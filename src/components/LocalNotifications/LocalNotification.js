import PushNotification, { Importance } from "react-native-push-notification";
  
export function CreateNotificationChannel(title,message) {
  PushNotification.createChannel({
    channelId:'com.assignment',
    channelName:'com.assignment',
    importance:Importance.HIGH,
    vibrate:true,
  },(created) => console.log(`CreateChannel returned '${created}'`))
}

export function LocalNotifications(title,message) {
  PushNotification.localNotification({
    channelId:'com.assignment',
    title:title,
    message:message,
    ignoreInForeground:false,
    importance:Importance.HIGH,
    vibration:true,
  })
}