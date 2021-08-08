import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Clipboard from '@react-native-clipboard/clipboard';

import {BankText, Gap, LabelText} from '@components/atoms';
import {fontFamily, color, dateFormatter,numberWithThousandSeparator} from '@utils/';
import { showToast } from '@utils/snackbar';

export default function TransactionDetail({navigation, route}) {
  const {
    id,
    account_number,
    amount,
    beneficiary_bank,
    beneficiary_name,
    created_at,
    unique_code,
    sender_bank,
    remark,
  } = route.params.data;
  const copyToClipboard = () => {
    Clipboard.setString(id);
    showToast('Copied to Clipboard')
  };

  return (
    <View style={styles.container}>
      <View style={styles.transactionWrapper}>
        <Text style={styles.text}>ID TRANSAKSI: #{id}</Text>
        <TouchableOpacity style={styles.copy} onPress={copyToClipboard}>
          <Icon name="content-copy" size={20} color={color.primary} />
        </TouchableOpacity>
      </View>
      <Gap height={1} color="#F0F0F0" />
      <View style={styles.wrapper}>
        <Text style={styles.text}>DETAIL TRANSAKSI</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Tutup</Text>
        </TouchableOpacity>
      </View>
      <Gap height={1} color="#A9A9A9" />
      <View style={styles.detailWrapper}>
        <BankText from={sender_bank} to={beneficiary_bank} />
        <Gap height={20} />
        <View style={styles.infoWrapper}>
          <View style={{flex: 2}}>
            <LabelText label={beneficiary_name} value={account_number} />
          </View>
          <View style={{flex: 1}}>
            <LabelText label="NOMINAL" value={`Rp${numberWithThousandSeparator(amount)}`} />
          </View>
        </View>
        <Gap height={20} />
        <View style={styles.infoWrapper}>
          <View style={{flex: 2}}>
            <LabelText label="Berita Transfer" value={remark} />
          </View>
          <View style={{flex: 1}}>
            <LabelText label="Kode Unik" value={unique_code} />
          </View>
        </View>
        <Gap height={20} />
        <LabelText label="WAKTU DIBUAT" value={dateFormatter(created_at)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: Platform.OS === 'ios' ? 50 : 20,
    paddingVertical: 20,
  },
  transactionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailWrapper: {
    padding: 20,
  },
  infoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  copy: {
    marginLeft: 10,
  },
  text: {
    fontFamily: fontFamily.bold,
  },
  buttonText: {
    fontFamily: fontFamily.bold,
    color: color.primary,
  },
});
