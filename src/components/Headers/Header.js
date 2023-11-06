import React from 'react';
import {View, StyleSheet, Platform, Image} from 'react-native';
import ImagePath from '../../common/ImagePath';

export default function Header(props) {
  const {leftComponent, imageStyle,iconComponent,containerStyle} = props;
  return (
    <>
      <View style={{...styles.container,...containerStyle}}>
        {leftComponent ? leftComponent : <View />}
        {iconComponent ? (
          iconComponent
        ):
        <Image style={imageStyle} source={ImagePath.logo} />
}
        <View />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? 40 : 0,
  },
});
