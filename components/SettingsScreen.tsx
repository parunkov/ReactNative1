import { StyleSheet, Text, View, Button, Linking, Alert } from 'react-native';
import { SettingsScreenProps } from '../types/types';
import PageHeader from './PageHeader';

export default function SettingsScreen({ callback }: SettingsScreenProps) {
    return (
        <View style={styles.screen}>
            <PageHeader text={'Настройки'} callback={callback} />
            <View style={styles.container}>
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
    },
});
