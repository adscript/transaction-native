import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Gap} from '@components/atoms';
import {TransactionList, TransactionListSkeleton} from '@components/organisms';
import {ModalSortBy, SearchBox} from '@components/molecules';
import {BASE_URL} from '@utils/';

export default function TransactionHome({navigation}) {
  const [transactionData, setTransactionData] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);
  const [showModalSort, setShowModalSort] = useState(false);

  const fetchListTransaction = async () => {
    setLoading(true);
    const resp = await fetch(`${BASE_URL}/frontend-test`);
    const data = await resp.json();
    setTransactionData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchListTransaction();
  }, []);

  const onChangeKeyword = value => {
    setKeyword(value);
  };

  const handleOnPress = data => {
    navigation.navigate('TransactionDetail', {data});
  };

  const onSorting = value => {
    setSortBy(value);
    setShowModalSort(false);
  };

  const onRefresh = () => {
    setLoading(true);
    fetchListTransaction();
  };

  const modifiedData = arrayList => {
    let arrayModified = arrayList;
    if (keyword.length > 0)
      arrayModified = arrayList.filter(
        ({beneficiary_name, amount, beneficiary_bank, sender_bank}) =>
          beneficiary_name.toLowerCase().includes(keyword.toLowerCase()) ||
          beneficiary_bank.toLowerCase().includes(keyword.toLowerCase()) ||
          amount.toString().includes(keyword.toLowerCase()) ||
          sender_bank.toLowerCase().includes(keyword.toLowerCase()),
      );
    if (sortBy) arrayModified = sortedData(arrayModified);
    return arrayModified;
  };

  const sortedData = arrayList => {
    switch (sortBy) {
      case 1:
        return arrayList.sort((a, b) => {
          return a.beneficiary_name
            .toLowerCase()
            .localeCompare(b.beneficiary_name.toLowerCase());
        });
      case 2:
        return arrayList.sort((a, b) => {
          return b.beneficiary_name
            .toLowerCase()
            .localeCompare(a.beneficiary_name.toLowerCase());
        });
      case 3:
        return arrayList.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });
      case 4:
        return arrayList
          .sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
          })
          .reverse();
      default:
        return arrayList;
    }
  };

  const sortParamList = [
    {
      label: 'URUTKAN',
      value: null,
    },
    {
      label: 'Nama A-Z',
      value: 1,
    },
    {
      label: 'Nama Z-A',
      value: 2,
    },
    {
      label: 'Tanggal Terbaru',
      value: 3,
    },
    {
      label: 'Tanggal Terlama',
      value: 4,
    },
  ];

  return (
    <View style={styles.container}>
      <Gap height={10} />
      <SearchBox
        text={keyword}
        onChangeText={onChangeKeyword}
        placeholder="Cari nama, bank, atau nominal"
        buttonText={sortBy ? sortParamList[sortBy].label : 'URUTKAN'}
        buttonAction={() => setShowModalSort(true)}
      />
      <Gap height={10} />
      <Gap height={10} />
      {/* <TransactionListSkeleton/> */}
      {!loading ? (
        <TransactionList
          data={modifiedData(Object.values(transactionData))}
          onRefresh={onRefresh}
          refreshing={loading}
          dataOnPress={handleOnPress}
        />
      ) : (
        <TransactionListSkeleton />
      )}
      <ModalSortBy
        isVisible={showModalSort}
        onChange={onSorting}
        sortValue={sortBy}
        sortParamList={sortParamList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
  },
});
