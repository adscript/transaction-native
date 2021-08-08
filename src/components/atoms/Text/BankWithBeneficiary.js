import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto';
import {fontFamily} from '@utils/';

export default function BankWithBeneficiary({from, to}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text(from)}>{from}{` `}</Text>
            <Icon name="arrow-right" size={15} color="black" />
            <Text style={styles.text(to)}>{` `}{to}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: (word) => ({
        fontFamily: fontFamily.bold,
        fontSize: 15,
        textTransform: word.length < 5 ? 'uppercase' : 'capitalize'
    })
})
