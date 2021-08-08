import { fontFamily } from '@utils/'
import { color } from '@utils/'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const statusLabel = (status) => {
    switch(status){
        case 'PENDING': 
            return 'Pengecekan'
        case 'SUCCESS':
            return 'Berhasil' 
    }
}

export default function Badge({status}) {
    return (
        <View style={styles.container(status)}>
            <Text style={styles.text(status)}>{statusLabel(status)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: (status) => ({
        borderWidth: 2,
        borderRadius: 5,
        borderColor: status === 'PENDING' ? color.primary : color.secondary,
        backgroundColor: status === 'PENDING' ? 'white' : color.secondary,
        paddingVertical: 6,
        paddingHorizontal: 10,
    }),
    text: (status) => ({
        textAlign: 'center',
        fontFamily: fontFamily.bold ,
        color: status === 'PENDING'? 'black' : 'white'
    })
})
