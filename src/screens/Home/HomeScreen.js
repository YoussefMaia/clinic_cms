import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { HeaderContext } from '../../helper/Context'
// Layout
import Header from '../../layout/Header'
import DateCard from '../../components/DateCard'

const HomeScreen = ({ navigation }) => {

    const { i18n } = useContext(HeaderContext)


    const [data, setData] = useState([
        {
            id: 1,
            data: "2023-05-05 08:00",
            name: "معاذ"
        },
        {
            id: 2,
            data: "2023-05-06 08:30",
            name: "معاذ"
        },
        {
            id: 3,
            data: "2023-05-07 09:00",
            name: "معاذ"
        }
    ])

    return (
        <View>
            <Header navigation={navigation} title="الصفحة الرئيسة" />
            <View style={styles.homePageContainer}>
                {data.map((val, i) => {
                    return (
                        <TouchableOpacity
                            key={i}
                            
                        >
                            <DateCard
                                name={val.name}
                                date={val.data}
                            />
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    homePageContainer: {
        padding: 8
    }
});

export default HomeScreen