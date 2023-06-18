import { StyleSheet, Text, View, Button, Linking, Alert } from 'react-native';
import { AutoScreenProps } from '../types/types';
import Map from './Map';
import PageHeader from './PageHeader';

export default function AutoScreen({ auto, callback, autoFilter, isRusLang }: AutoScreenProps) {
    const onCallPress = () => {
        Linking.openURL(`tel:${auto.phone}`);
    };
    const sendMsg = () => {
        const URL = `whatsapp://send?text=Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе&phone=${auto.phone}`;

        Linking.openURL(URL)
            .then((data) => {
                // console.log('WhatsApp Opened');
            })
            .catch(() => {
                Alert.alert(isRusLang ? 'Установите Whatsapp для отправки сообщения' : 'Make sure Whatsapp installed on your device');
            });
    };

    return (
        <View style={styles.screen}>
            <PageHeader text={isRusLang ? auto.name : auto.nameEng} callback={callback} />
            <View style={styles.mapcontainer}>
                <Map
                    autoData={[auto]}
                    autoFilter={autoFilter}
                    latitude={auto.latitude}
                    longitude={auto.longitude}
                    isRusLang={isRusLang}
                />
            </View>
            <View style={styles.container}>
                <Text>{`${isRusLang ? 'Водитель' : 'Driver'}`}: {isRusLang ? auto.driver : auto.driverEng}</Text>
                <Text>{`${isRusLang ? 'Категория' : 'Category'}`}: {isRusLang ? auto.category : auto.categoryEng}</Text>
                <Text>{`${isRusLang ? 'Телефон' : 'Phone'}`}: {auto.phone}</Text>
                <View style={styles.button}>
                    <Button title={isRusLang ? 'Позвонить' : 'Call'} onPress={onCallPress}></Button>
                </View>
                <View style={styles.button}>
                    <Button title={isRusLang ? 'Написать' : 'Send'} onPress={sendMsg}></Button>
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
    return: {
        width: 40,
        height: 40,
    },
    title: {
        alignSelf: 'stretch',
        textAlign: 'center',
        marginLeft: 30,
        marginBottom: 20,
        marginTop: 30,
        backgroundColor: 'green',
    },
    button: {
        marginTop: 10,
        width: '100%'
    },
    mapcontainer: {
        width: '100%',
        height: 300,
        marginBottom: 10,
    },
});
