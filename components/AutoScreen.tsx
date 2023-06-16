import { StyleSheet, Text, View, Pressable, Button, Linking, Alert } from 'react-native';
import { Auto, AutoProps } from '../types/types';

export default function AutoScreen({ auto, key, callback }: AutoProps) {
    const onCallPress = () => {
        console.log(auto.phone);
        Linking.openURL(`tel:${auto.phone}`);
    };
    const onReturnPress = () => {
        callback();
        console.log(1111);
        // console.log(key);
    }

    const sendMsg = () => {
        const URL = `whatsapp://send?text=Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе&phone=${auto.phone}`;

        Linking.openURL(URL)
            .then((data) => {
                console.log('WhatsApp Opened');
            })
            .catch(() => {
                Alert.alert('Make sure Whatsapp installed on your device');
            });
    };

    return (
        <View style={styles.screen}>
            <View style={styles.titleContainer}>
                <View>
                    <Button title={'Назад'} onPress={onReturnPress} />
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>{auto.name}</Text>
                </View>
            </View>
            <View></View>
            <View style={styles.container}>
                <Text>Водитель!!: {auto.driver}</Text>
                <Text>Категория: {auto.category}</Text>
                <Text>Телефон: {auto.phone}</Text>
                <View style={styles.button}>
                    <Button title={'Позвонить'} onPress={onCallPress}></Button>
                </View>
                <View style={styles.button}>
                    <Button title={'Написать'} onPress={sendMsg}></Button>
                </View>
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
    titleContainer: {
        flex: 0,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginTop: 30,
    },
    title: {
        marginBottom: 20,
        marginTop: 30,
    },
    titleText: {
        fontSize: 20,
        fontWeight: '700',

    },
    button: {
        marginTop: 10,
        width: '100%'
    },
});
