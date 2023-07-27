import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translations: {
                'Sign Up': 'Sign Up',
                'Password mismatch': 'Password mismatch',
                Username: 'Username',
                'Display Name': 'Display Name',
                'Password': 'Password',
                'Password Repeat': 'Password Repeat',
                Login: 'Login',
                LOGIN: 'LOGIN',
                'Home Page': 'Home Page',
                'Share your coffee, explore the world!' : 'Share your coffee, explore the world!',
                'Logout': 'Logout',
                'Profile': 'Profile',
                'coded by':'coded by',
                'Forget Password?': 'Forget Password?'
            }
        },
        tr: {
            translations: {
                'Sign Up': 'Kayıt Ol',
                'Password mismatch': 'Aynı şifreyi giriniz',
                Username: 'Kullanıcı Adı',
                'Display Name': 'Görünen Ad',
                'Password': 'Şifre',
                'Password Repeat': 'Şifreyi Tekrarlayın',
                LOGIN: 'Oturum Aç',
                Login: 'Oturum Aç',
                'Home Page': 'Ana Sayfa',
                'Share your coffee, explore the world!' : 'Kahvenizi paylaşın, dünyayı keşfedin!',
                'Logout': 'Çıkış',
                'Profile': 'Profil',
                'coded by':'Kodlayan',
                'Forget Password?': 'Şifrenizi mi Unuttunuz?'
            }
        }
    },
    fallbackLng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeperator: false,
    interpolation: {
        escapeValue: false,
        formatSeperator: ','
    },
    react: {
        wait: true
    }
});

export default i18n;