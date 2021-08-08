import { fontFamily } from '@utils/';
import { color } from '@utils/';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

export default function TextIcon({label, action}) {
    return (
        <TouchableOpacity style={styles.container} onPress={action}>
            <Text style={styles.text}>{label}</Text>
            <Icon name="chevron-down" size={30} color={color.primary} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontFamily: fontFamily.bold,
        color: color.primary,
    }
})
