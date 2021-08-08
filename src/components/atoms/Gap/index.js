import React from 'react'
import { View } from 'react-native'

export default function Gap({height, width, color}) {
    return (
        <View style={{width, height, backgroundColor: color}}/>
    )
}

