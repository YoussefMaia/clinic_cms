import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DateCard = ({ name, date }) => {
    return (
        <View style={styles.dateCard}>
            <Text>{name}</Text>
            <Text>{date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    dateCard: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        shadowColor: '#000000',
        shadowRadius: 10,
        shadowOpacity: 1,
        marginBottom: 8,
        display: 'flex'
    }
});

export default DateCard