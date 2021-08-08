import React from 'react';
import {ScrollView, StyleSheet, FlatList, Text, View} from 'react-native';

import {Gap} from '@components/atoms';
import {CardTransaction} from '@components/molecules';

export default function TransactionList({
  data,
  onRefresh,
  refreshing,
  dataOnPress
}) {
  const renderItem = ({item}) => {
    return (
      <>
        <CardTransaction item={item} onPress={dataOnPress}/>
        <Gap height={10} />
      </>
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={{flex: 1}}
      showsVerticalScrollIndicator={false}
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  );
}

const styles = StyleSheet.create({});
