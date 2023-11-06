import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.primaryYellow,
  },
  homeBg: {
    height: 250,
  },
  label: {
    position: 'absolute',
    top: 100,
    fontSize: 18,
    color: Colors.neutralGrey,
    marginLeft: '4.5%',
  },
  letPlay: {
    position: 'absolute',
    top: 130,
    fontSize: 26,
    fontWeight: '600',
    marginLeft: '4.5%',
  },
  innerContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  image: {
    marginTop: '-21%',
    alignSelf: 'center',
  },
  padding: {
    padding: 15,
  },
  toggle: {
    position: 'absolute',
    top: 45,
    marginLeft: '5%',
  },
  toggleImg: {
    width: 22,
  },
  btn: {
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.neutralBlack,
    marginTop: 10,
  },
  btnContainer: {
    marginTop: 40 
  }
});
