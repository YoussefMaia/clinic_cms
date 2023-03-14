import { TextInput, StyleSheet } from 'react-native'
import React from 'react'
// expo
import { StatusBar } from 'expo-status-bar';

// React Native Paper
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Navigataion
import { useNavigation } from '@react-navigation/native'

const Header = ({ title, navigation, search }) => {

    const navigate = useNavigation()

    return (
        <Appbar.Header
            style={{ backgroundColor: '#6238E2',  top: 0 }}
        >

            <StatusBar style='light' />

            <Appbar.Action
                icon={({ size, color }) => (
                    <Icon name="menu" color="#fff" size={size} />
                )}
                onPress={() => navigate.openDrawer()}
            />
    

            {search ?
                <TextInput
                    style={styles.input}
                    // onFocus={() => navigation.navigate('Notifications')}
                    placeholder="بحث"
                    
                />
                :
                <Appbar.Content title={title} color="#fff" />

            }

            <Appbar.Action
                icon={({ size, color }) => (
                    <Icon name="person" color="#fff" size={size} />
                )}
                onPress={() => navigation.navigate('Notifications')}
            />

        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 12,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 10,
        flex: 1
    },
});

export default Header