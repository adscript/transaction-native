import {fontFamily} from '@utils/';
import {color} from '@utils/';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Gap from '../Gap';

export default function TextRadio({label, value, onPress, checked}) {
  
  return (
    <TouchableOpacity onPress={() => onPress(value)} style={styles.container}>
      <Icon
        name={`radio-button-${checked ? 'checked' : 'unchecked'}`}
        size={26}
        color={color.primary}
      />
      <Gap width={10} />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: fontFamily.regular,
    fontSize: 17,
  },
});
