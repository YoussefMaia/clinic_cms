import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'

import { Drawer } from 'react-native-paper';
// Assets
import bg from '../../assets/drawerBg.png'
import Icon from 'react-native-vector-icons/MaterialIcons';


const CustomDrawer = ({ navigation }) => {

    const [active, setActive] = useState('');

    // Navigation
    const navigateTo = (active, page) => {
        setActive(active)
        navigation.navigate(page)
    }

    return (
        <View style={styles.drawerSection}>
            <View style={styles.drawerHeader}>
                <Image
                    style={styles.drawerBg}
                    source={bg}
                />
            </View>
            <Drawer.Section title="عنوان مناسب يمكن الغائه"  >
                <Drawer.Item
                    label="الصفحة الرئيسية"
                    active={active === 'first'}
                    onPress={() => navigateTo('first', 'Home')}
                    icon={({ size, color }) => (
                        <Icon name="home" color={color} size={size} />
                    )}
                />
                <Drawer.Item
                    label="الصفحة الثانية"
                    active={active === 'second'}
                    onPress={() => navigateTo('second', 'ProfileScreen')}
                    icon={({ size, color }) => (
                        <Icon name="person" color={color} size={size} />
                    )}
                />
                <Drawer.Item
                    label="إدارة المراعيد"
                    active={active === 'third'}
                    onPress={() => navigateTo('third', 'DateConfigurationScreen')}
                    icon={({ size, color }) => (
                        <Icon name="calendar-today" color={color} size={size} />
                    )}
                />
            </Drawer.Section>
        </View>

    )
}


const styles = StyleSheet.create({
    drawerHeader: {
        width: '100%',
        backgroundColor: 'red',
        height: 200
    },
    drawerBg: {
        width: '100%',
        height: '100%'
    },
    drawerSection: {
        height: '100%',
        filter: 'blur(4px)'
    }
})
export default CustomDrawer