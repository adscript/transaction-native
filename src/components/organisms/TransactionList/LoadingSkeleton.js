import {Gap} from '@components/atoms';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Shine,
} from 'rn-placeholder';

export default function LoadingSkeleton() {
  return Array.from({length: 8
}).map((_, index) => (
    <View key={index}>
      <View style={styles.container}>
        <Placeholder Animation={Shine}>
          <PlaceholderLine width={35} height={15} noMargin style={{marginTop: 10}}/>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <PlaceholderLine height={12} width={60} noMargin/>
          <PlaceholderLine height={30} width={24} noMargin/>
          </View>
          <PlaceholderLine width={50} height={12} noMargin style={{marginTop: 5, marginBottom: 5}} />
        </Placeholder>
      </View>
      <Gap height={10} />
    </View>
  ));
}

const styles = StyleSheet.create({
  container: {
    borderLeftWidth: 8,
    borderRadius: 8,
    borderLeftColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
