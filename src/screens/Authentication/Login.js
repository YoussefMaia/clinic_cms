import { View, Image, StyleSheet, TouchableOpacity, Text , Animated} from 'react-native'
import React, { useState, useContext } from 'react'
import { HeaderContext } from '../../helper/Context'
import SafeAreaHeader from '../../layout/SafeAreaHeader'
// Constants
import { COLORS } from '../../constants/index'
// Assets
import logo from '../../../assets/logo-pink.png'
// React Native Paper
import {
    TextInput,
    Button,
    Menu
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Login = () => {

    const { i18n, setAutherised } = useContext(HeaderContext)


    // Language
    const [LanguageMenuVisible, setLanguageMenuVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("العربية")
    const changeLanguage = (name) => {
        setSelectedLanguage(name)
        closeMenu()
    }
    const openMenu = () => setLanguageMenuVisible(true);
    const closeMenu = () => setLanguageMenuVisible(false);
    const languageList = [
        {
            id: 1,
            name: "العربية",
            short: "ar"
        },
        {
            id: 2,
            name: "English",
            short: "en"
        },
    ]

    // Authentication
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = () => {
        if (email.toLocaleLowerCase() !== "admin") {
            console.log("wrong email")
            return
        }
        if (password.toLocaleLowerCase() !== "admin") {
            console.log("wrong email")
            return
        }

        setAutherised(true)

    }


    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <SafeAreaHeader color="light" />
            <View style={styles.authContainer}>
                <Image
                    source={logo}
                    style={styles.logo}
                />

                <View style={{position: 'relative', marginBottom: 40}}>
                    <View style={{width: 20, height: 20, backgroundColor: '#EEDFFE', position: 'absolute', left: 50, top: -20, borderRadius: 50, opecity: '0.1'}}></View>
                    <View style={{width: 22, height: 22, backgroundColor: '#EEDFFE', position: 'absolute', right: 50, top: -5, borderRadius: 50}}></View>
                    <View style={{width: 20, height: 20, backgroundColor: '#EEDFFE', position: 'absolute', left: 50, top: 50, borderRadius: 50}}></View>

                    <Icon name="lock-outline" color="#6238E2" size={48} />
                </View>

                <TextInput
                    mode="outlined"
                    label={i18n.t("email")}
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    theme={{ roundness: 8 }}

                />
                <TextInput
                    mode="outlined"
                    label={i18n.t("password")}
                    style={styles.input}
                    type="password"
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    theme={{ roundness: 8 }}
                />
                <Button
                    mode="contained"
                    onPress={login}
                    style={styles.button}
                >
                    {i18n.t("login")}
                </Button>
                <TouchableOpacity>
                    <Text style={{ color: COLORS.primary, marginTop: 16 }}>هل نسيت كلمة المرور؟</Text>
                </TouchableOpacity>
                <View
                    style={{
                        paddingTop: 32,
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                    <Menu
                        visible={LanguageMenuVisible}
                        onDismiss={closeMenu}
                        anchor={
                            <Button
                                icon={({ size, color }) => (
                                    <Icon name="language" color={color} size={size} />
                                )}
                                mode="outlined" onPress={openMenu} style={{ borderColor: COLORS.primary, display: 'flex', alignItems: 'center' }}>
                                {selectedLanguage}
                            </Button>
                        }
                    >
                        {languageList.map((val, i) => {
                            return <Menu.Item key={i} onPress={() => { changeLanguage(val.name) }} title={val.name} />
                        })}

                    </Menu>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    authContainer: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        padding: 8
    },
    logo: {
        marginVertical: 40
    },
    input: {
        width: '100%',
        marginBottom: 8,
        backgroundColor: '#F5F5F5',
        borderColor: '#F5F5F5'
    },

    button: {
        marginTop: 12,
        width: '100%',
        borderRadius: 8
    }
})

export default Login