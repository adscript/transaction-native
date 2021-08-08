import { fontFamily } from '@utils/'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Gap from '../Gap'

export default function LabelText({label, value}) {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <Gap height={5}/>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: fontFamily.bold,
        textTransform: 'uppercase',
    },
    value: {
        fontFamily: fontFamily.regular,
    }
})
