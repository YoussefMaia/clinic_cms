import { StyleSheet, View } from 'react-native'
import React from 'react'
// Expo
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
const SafeAreaHeader = ({ color }) => {
    return (
        <View style={ color === 'light' ? styles.headerContainerLight : styles.headerContainer} >
            <StatusBar style={color === 'light' ? `dark` : `light`} />
        </View>
    )

}

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        backgroundColor: '#811641',
        height: Constants.statusBarHeight
    },
    headerContainerLight: {
        width: '100%',
        backgroundColor: '#ffffff',
        height: Constants.statusBarHeight
    }
})

export default SafeAreaHeader