import { useState, useEffect } from 'react'
import { View, I18nManager } from 'react-native';
import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';
import { HeaderContext } from './src/helper/Context';
// React Native Paper
import {
    MD3LightTheme as DefaultTheme,
    Provider as PaperProvider
} from 'react-native-paper';
// Navigations
import AppNavigation from './src/navigations/AppNavigation';
import AuthNavigation from './src/navigations/AuthNavigation';
// Constants
import { COLORS } from './src/constants'
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: COLORS.primary,
        secondary: 'green',
    }
};

const translations = {
    en: {
        email: "Email",
        password: "Password",
        login: "Login",
        dashboardTitle: "Dashboard",
        sunday: "Sunday",
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday"
    },
    ar: {
        email: "البريد الاكتروني",
        password: "كلمة المرور",
        login: "دخول",
        dashboardTitle: "الرئيسية",
        sunday: "يوم الأحد",
        monday: "يوم الاثنين",
        tuesday: "يوم الثلاثاء",
        wednesday: "يوم الأربعاء",
        thursday: "يوم الخميس",
        friday: "يوم الجمعة",
        saturday: "يوم السبت"
    }
}

// Localization
const i18n = new I18n(translations);
Localization.locale = 'ar'
I18nManager.forceRTL(true);
Localization.isRTL = true



i18n.locale = Localization.locale
i18n.enableFallback = true


export default function App() {





    useEffect(() => {
        // console.log(Localization.getLocales())
    }, [])


    const [locale, setLocale] = useState(i18n.locale)

    // const changeLanguage = (locale, shortLocale) => {
    //     i18n.locale = locale
    //     Localization.locale = locale
    //     switch (locale) {
    //         case 'ar-EG':
    //             Localization.isRTL = true
    //             I18nManager.forceRTL(true);
    //             break;
    //         case 'ar':
    //             Localization.isRTL = true
    //             I18nManager.forceRTL(true);
    //             break;
    //         case 'en-US':
    //             Localization.isRTL = false
    //             I18nManager.forceRTL(false);
    //             break;
    //         default:
    //             Localization.isRTL = false
    //             I18nManager.forceRTL(false);
    //     }
    //     setLocale(locale)
    // }

    const [autherised, setAutherised] = useState(true)





    return (
        <HeaderContext.Provider value={{ i18n, setAutherised }}>
            <View style={{ flex: 1 }}>
                <PaperProvider theme={theme}>
                    {autherised ? <AppNavigation /> : <AuthNavigation />}
                </PaperProvider>
            </View>
        </HeaderContext.Provider>
    );
}

