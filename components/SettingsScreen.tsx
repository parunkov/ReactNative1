import { StyleSheet, Text, View } from 'react-native';
import { SettingsScreenProps } from '../types/types';
import PageHeader from './PageHeader';
import Radio from './RadioForm';

export default function SettingsScreen({ callback, change, isRusLang }: SettingsScreenProps) {
    return (
        <View style={styles.screen}>
            <PageHeader text={isRusLang ? 'Настройки' : 'Settings'} callback={callback} />
            <View style={styles.container}>
                <Text style={styles.text}>{`${isRusLang ? 'Язык' : 'Language'}:`}</Text>
            </View>
            <View style={styles.container}>
                 <Radio callback={change} isRusLang={isRusLang} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 0,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '90%',
        marginBottom: 15,
    },
    text: {
        fontSize: 18,
    },
});
