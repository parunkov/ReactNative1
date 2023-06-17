import { StyleSheet, Text, View, Button, Linking, Alert } from 'react-native';
import { SettingsScreenProps } from '../types/types';
import PageHeader from './PageHeader';
import Radio from './RadioForm';

console.log(Radio);


export default function SettingsScreen({ callback }: SettingsScreenProps) {
    return (
        <View style={styles.screen}>
            <PageHeader text={'Настройки'} callback={callback} />
            <View style={styles.container}>
                <Text style={styles.text}>Язык:</Text>
            </View>
            <View style={styles.container}>
                 <Radio />
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
