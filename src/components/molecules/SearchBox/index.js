import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import { ButtonTextIcon, Gap } from '@components/atoms';
import Icon from 'react-native-vector-icons/AntDesign';
import { fontFamily } from '@utils/';

export default function SearchBox({
    text,
    onChangeText,
    placeholder,
    buttonText,
    buttonAction,
}) {
  return (
    <View style={styles.container}> 
      <Icon name="search1" size={20} color='silver' />
      <Gap width={5}/>
      <TextInput
        style={styles.input}
        numberOfLines={1}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
      />
      <ButtonTextIcon label={buttonText} action={buttonAction}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 13,
        paddingVertical: 5
    },
    input: {
        flex: 1,
        fontFamily: fontFamily.regular,
        fontSize: 14
    }
});
