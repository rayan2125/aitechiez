import { Alert } from "react-native";
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import { setLatestRemoteMessage } from "./Helper";
import NavigationServices from "../Screens/NavigationServices";
export class Utils {
  constructor() {
  }
  isStringEmpty(text) {
    if (text && text != null && (text).trim() != '') {
      return false;
    } else {
      return true;
    }
  }

  getInitials(name) {
    if (!this.isStringEmpty(name)) {
      let names = name.split(' ');
      //  console.log(names);
      let initials = names[0].substring(0, 1).toUpperCase();

      if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
      }
      return initials;
    } else {
      return ''
    }

  };
  addCommaSepetator(addcomma, message) {
    return addcomma ? message + ", " : message;
  }
  getRandomColor() {
    let letters = 'BCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
    // return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    // return ('hsla(' + (Math.floor(Math.random()*360)) + ', 100%, 60%, 1)');
  }
  alertBuilder(title, message = "", okayText = "", cancelText = "", askMeLater = "") {
    return {
      title: title,
      message: message,
      okayText: okayText,
      cancelText: cancelText,
      askMeLater: askMeLater,
    };
  }
  popUpConfirm(alertBuilder, _action) {
    //EventRegister.emitEvent(APP_EVENTS.disableLoader);
    // if (Platform.OS === APP_PLATFORM.IOS) {
    //   setTimeout(() => {
    //     Alert.alert(this.languageCtrl.instant(alertBuilderObj.title), this.languageCtrl.instant(alertBuilderObj.message), [
    //       {
    //             text: this.languageCtrl.instant(alertBuilderObj.cancelText),
    //         onPress: () => _action(APP_ALERT_ACTION_RESULT.ACTION_NEGATIVE),
    //       },
    //       {
    //             text: this.languageCtrl.instant(alertBuilderObj.okayText),
    //         onPress: () => _action(APP_ALERT_ACTION_RESULT.ACTION_POSITIVE),
    //       },
    //     ]);
    //   }, APP_SYS_PROPS.iOS_AlertTimeout);
    // } else {
    Alert.alert(alertBuilder.title, alertBuilder.message, [
      {
        text: alertBuilder.cancelText,
        onPress: () => _action(0),
      },
      {
        text: alertBuilder.okayText,
        onPress: () => _action(1),
      },
    ]);
  }
  //  }



}
export const getFontStyles = (params) => {
  //console.log('Params',params);
  const { weight, style = 'normal' } = params ? params : '';
  const fontWeight = weight ? weight : 'Regular';
  const fontStyle = style ? style : 'normal';
  //console.log('Weight',weight);

  const suffix = `${fontWeight}${fontStyle === 'italic' ? 'Italic' : ''}`;
  // console.log('SUFFIXXX',`${family}-${suffix}`)
  return { fontFamily: `` };
};





export const notification = () => {



  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );

    NavigationServices.navigate("Leadhistory")
    
// setLatestRemoteMessage(remoteMessage)
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        setLatestRemoteMessage(remoteMessage);
      }

    });
};

 export const unsubscribeBackground = async() =>{

   messaging().setBackgroundMessageHandler(async remoteMessage => {
   console.log('Notification caused app to open from quit state:', remoteMessage);
   // Perform any additional actions based on the notification data if needed
   // .navigate('Settings');
 });
 }


export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}


messaging().setBackgroundMessageHandler(async remoteMessage => {
  // Handle background messages here
});

export const getToken = async ()=>{
  await messaging().registerDeviceForRemoteMessages();
const token = await messaging().getToken();
}

export  async function onDisplayNotification({title,body}) {
  // Request permissions (required for iOS)
  await notifee.requestPermission()

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  // Display a notification
  await notifee.displayNotification({
    title,
    body,
    android: {
      channelId,
      // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
      // pressAction is needed if you want the notification to open the app when pressed
      // pressAction: {
      //   id: 'default',
      // },
    },
  });
    
}

