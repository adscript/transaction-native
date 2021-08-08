import {ButtonTextRadio, Gap} from '@components/atoms';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';

export default function SortBy({isVisible, sortValue, onChange, sortParamList}) {
  

  return (
    <Modal testID={'sortModal'} isVisible={isVisible}>
      <View style={styles.content}>
        {sortParamList.map(({label, value}, index) => {
          return (
            <View key={index}>
              <Gap height={10}/>
              <ButtonTextRadio
                label={label}
                value={value}
                checked={value === sortValue}
                onPress={onChange}
              />
              <Gap height={10}/>
            </View>
          );
        })}
        {/* <Button testID={'close-button'} onPress={props.onPress} title="Close" /> */}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
