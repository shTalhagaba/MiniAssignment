import { StyleSheet } from 'react-native';
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
    marginTop: '30%',
  },
  button: { 
    width: '90%',
    height: 45,
    backgroundColor: Colors.black50,
    alignSelf: 'center',
    marginTop: '30%',
  },
  btnTitle: {
    alignSelf: 'center',
    marginTop: 10,
    color: Colors.primaryWhite,
    fontSize: 16,
  },
});
