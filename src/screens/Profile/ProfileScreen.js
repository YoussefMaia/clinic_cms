import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import {HeaderContext} from '../../helper/Context'
// Layout
import Header from '../../layout/Header'

const ProfileScreen = ({navigation}) => {
    return (
        <View>
            <Header navigation={navigation} title="الصفحة الشخصية"/>
            <Text>Profile</Text>
        </View>
    )
}

export default ProfileScreen