import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.primaryBG,
  },
  padding: {
    padding: 15,
  },
  notificationBtn: {
    width: '90%',
    height: 45,
    backgroundColor: Colors.red,
    alignSelf: 'center',
    marginTop: '60%',
  },
  btnTitle: {
    alignSelf: 'center',
    marginTop: 10,
    color: Colors.primaryWhite,
    fontSize: 16,
  },
});
