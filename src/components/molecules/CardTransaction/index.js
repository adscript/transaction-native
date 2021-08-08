import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { Badge, BankText, Gap } from '@components/atoms'
import { color, fontFamily } from '@utils/'

import Icon from 'react-native-vector-icons/Octicons';
import { dateFormatter } from '@utils/';
import { numberWithThousandSeparator } from '@utils/';

export default function CardTransaction({item, onPress}) {
    return (
        <TouchableOpacity style={styles.container(item.status)} onPress={() => onPress(item)}>
            <View>
                <BankText from={item.sender_bank} to={item.beneficiary_bank}/>
                <Gap height={8}/>
                <Text style={styles.recipient}>{item.beneficiary_name}</Text>
                <Gap height={8}/>
                <View style={styles.infoWrapper}>
                    <Text style={styles.text}>Rp{numberWithThousandSeparator(item.amount)} </Text>
                    <Icon name="primitive-dot" size={15} color="black" />
                    <Text style={styles.text}> {dateFormatter(item.created_at)}</Text>
                </View>
            </View>
            <Badge status={item.status}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: (status) => ({
        borderLeftWidth: 8,
        borderRadius: 8,
        borderLeftColor: status === 'PENDING' ? color.primary : color.secondary,
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }),
    textWrapper: {
        flex: 1
    },
    infoWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontFamily: fontFamily.regular
    },
    recipient: {
        fontFamily: fontFamily.regular,
        textTransform: 'uppercase',
    }
})
