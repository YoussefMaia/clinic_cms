import 'react-native-gesture-handler';
import { View, StyleSheet, Button } from 'react-native'
import React from 'react'
// Layout
import CustomDrawer from '../layout/CustomDrawer';
// Navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';;
// Screens
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import DateConfigurationScreen from '../screens/DateConfiguration/DateConfigurationScreen'

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}
const Drawer = createDrawerNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
                drawerContent={props => <CustomDrawer {...props}/>}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
                <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
                <Drawer.Screen name="DateConfigurationScreen" component={DateConfigurationScreen} />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    authContainer: {
        width: '100%',
    }
})

export default AppNavigation