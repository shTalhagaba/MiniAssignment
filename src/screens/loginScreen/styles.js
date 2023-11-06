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
  },
  login: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: '20%',
  },
  letStarted: {
    fontSize: 14,
    marginBottom: 20,
    color: Colors.neutralGrey,
    marginTop: 20,
  },
  forgetPasswordBtn: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  forgetPassword: {
    fontSize: 12,
    color: Colors.grey,
  },
  noAccount: {
    fontSize: 12,
    color: Colors.neutralGrey,
    alignSelf: 'center',
    marginTop: 20,
  },
  signUp: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.primaryBlue,
  },
  terms: {
    textAlign: 'center',
    fontSize: 12,
    color: Colors.grey,
    position: 'absolute',
    bottom: 20,
    width: '80%',
    alignSelf: 'center',
  },
  headerImg: {
    marginLeft: -30
  },
  backBtnImg: {
    bottom: 3
  },
  error: {
    color: Colors.red, 
    fontSize: 12,
  },
});
