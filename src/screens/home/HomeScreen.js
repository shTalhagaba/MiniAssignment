import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import ImagePath from '../../common/ImagePath';
import { useSelector } from 'react-redux';
import Button from '../../components/Buttons/Button';
import Strings from '../../common/Strings';

export default function HomeScreen(props) {
  const { navigation } = props;
  const userData = useSelector(state => state.auth)
  return (
    <View style={styles.container}>
      <Image source={ImagePath.homeBg} style={styles.homeBg} />
      <TouchableOpacity
        style={styles.toggle} onPress={() => navigation.openDrawer()}>
        <Image
          source={ImagePath.toggle}
          resizeMode="cover"
          style={styles.toggleImg}
        />
      </TouchableOpacity>

      <Text style={styles.label}>{Strings.hi}{userData.user.name || Strings.testName}</Text>
      <Text style={styles.letPlay}>{Strings.letsPlay}</Text>

      <View style={styles.innerContainer}>
        <View style={styles.padding}>
          <Image source={ImagePath.homeLogo} style={styles.image} />

          <Button
            btnTitle={Strings.startGame}
            icon={ImagePath.flag}
            containerStyle={styles.btnContainer}
            onPress={() => navigation.navigate('GameScreen')}
          />
          <Button
            btnTitle={Strings.howItWork}
            icon={ImagePath.book}
            containerStyle={styles.btn}
            onPress={() => navigation.navigate('HowItWorksScreen')}
          />
        </View>
      </View>
    </View>
  );
}
