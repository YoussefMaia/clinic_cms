import { View, Text, StyleSheet, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import React, { useContext, useState, useCallback } from 'react'
import { HeaderContext } from '../../helper/Context'
// Layout
import Header from '../../layout/Header'
// react native paper
import {
    Switch,
    IconButton,
    TextInput
} from 'react-native-paper';
const DateConfigurationScreen = ({ navigation }) => {

    const { i18n } = useContext(HeaderContext)

    // Days active
    const [sunday, setSunday] = useState(false)
    const [monday, setMonday] = useState(false)
    const [tuesday, setTuesday] = useState(false)
    const [wednesday, setWednesday] = useState(false)
    const [thursday, setThursday] = useState(true)
    const [friday, setFriday] = useState(false)
    const [saturday, setSaturday] = useState(false)


    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <View style={{ flex: 1 }}>

            <Header navigation={navigation} title="إدارة المواعيد" />
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >

                <View style={styles.pageContainer}>

                    <Text style={styles.dateRowTitle}>{i18n.t("sunday")}</Text>
                    <View style={styles.dateRow}>
                        <IconButton
                            icon="plus"
                            size={20}
                            onPress={() => console.log('Pressed')}
                        />
                        <TextInput
                            mode="outlined"
                            label="من الساعة"
                            style={styles.dateRowInput}

                        />
                        <TextInput
                            mode="outlined"
                            label="حتى الساعة"
                            style={styles.dateRowInput}
                            type="time"
                            

                        />
                        <Switch value={sunday} onValueChange={() => setSunday(!sunday)} />
                    </View>

                    <Text style={styles.dateRowTitle}>{i18n.t("monday")}</Text>
                    <View style={styles.dateRow}>
                        <IconButton
                            icon="plus"
                            size={20}
                            onPress={() => console.log('Pressed')}
                        />
                        <TextInput
                            mode="outlined"
                            label="من الساعة"
                            style={styles.dateRowInput}
                        />
                        <TextInput
                            mode="outlined"
                            label="حتى الساعة"
                            style={styles.dateRowInput}

                        />
                        <Switch value={monday} onValueChange={() => setMonday(!monday)} />
                    </View>

                    <Text style={styles.dateRowTitle}>{i18n.t("tuesday")}</Text>
                    <View style={styles.dateRow}>
                        <IconButton
                            icon="plus"
                            size={20}
                            onPress={() => console.log('Pressed')}
                        />
                        <TextInput
                            mode="outlined"
                            label="من الساعة"
                            style={styles.dateRowInput}
                        />
                        <TextInput
                            mode="outlined"
                            label="حتى الساعة"
                            style={styles.dateRowInput}

                        />
                        <Switch value={tuesday} onValueChange={() => setTuesday(!tuesday)} />
                    </View>

                    <Text style={styles.dateRowTitle}>{i18n.t("wednesday")}</Text>
                    <View style={styles.dateRow}>
                        <IconButton
                            icon="plus"
                            size={20}
                            onPress={() => console.log('Pressed')}
                        />
                        <TextInput
                            mode="outlined"
                            label="من الساعة"
                            style={styles.dateRowInput}
                        />
                        <TextInput
                            mode="outlined"
                            label="حتى الساعة"
                            style={styles.dateRowInput}

                        />
                        <Switch value={wednesday} onValueChange={() => setWednesday(!wednesday)} />

                    </View>

                    <Text style={styles.dateRowTitle}>{i18n.t("thursday")}</Text>
                    <View style={styles.dateRow}>
                        <IconButton
                            icon="plus"
                            size={20}
                            onPress={() => console.log('Pressed')}
                        />
                        <TextInput
                            mode="outlined"
                            label="من الساعة"
                            style={styles.dateRowInput}
                        />
                        <TextInput
                            mode="outlined"
                            label="حتى الساعة"
                            style={styles.dateRowInput}

                        />
                        <Switch value={thursday} onValueChange={() => setThursday(!thursday)} />

                    </View>

                    <Text style={styles.dateRowTitle}>{i18n.t("friday")}</Text>
                    <View style={styles.dateRow}>
                        <IconButton
                            icon="plus"
                            size={20}
                            onPress={() => console.log('Pressed')}
                        />
                        <TextInput
                            mode="outlined"
                            label="من الساعة"
                            style={styles.dateRowInput}
                        />
                        <TextInput
                            mode="outlined"
                            label="حتى الساعة"
                            style={styles.dateRowInput}

                        />
                        <Switch value={friday} onValueChange={() => setFriday(!friday)} />

                    </View>

                    <Text style={styles.dateRowTitle}>{i18n.t("saturday")}</Text>
                    <View style={styles.dateRow}>
                        <IconButton
                            icon="plus"
                            size={20}
                            onPress={() => console.log('Pressed')}
                        />
                        <TextInput
                            mode="outlined"
                            label="من الساعة"
                            style={styles.dateRowInput}
                        />
                        <TextInput
                            mode="outlined"
                            label="حتى الساعة"
                            style={styles.dateRowInput}

                        />
                        <Switch value={saturday} onValueChange={() => setSaturday(!saturday)} />
                    </View>

                </View>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({

    pageContainer: {
        padding: 8,
    },
    dateRowTitle: {
        padding: 8
    },
    dateRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    dateRowInput: {
        flex: 1,
    },
    scrollView: {

    },
});

export default DateConfigurationScreen