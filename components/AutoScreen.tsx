import { StyleSheet, Text, View, Button, Linking, Alert, Pressable, Image } from 'react-native';
import { Auto, AutoScreenProps } from '../types/types';
import Map from './Map';

export default function AutoScreen({ auto, callback, autoFilter }: AutoScreenProps) {
    const onCallPress = () => {
        Linking.openURL(`tel:${auto.phone}`);
    };
    const onReturnPress = () => {
        callback();
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
                <View style={styles.return} >
                    <Pressable style={styles.returnButton} onPress={onReturnPress}>
                        <Image source={require('../assets/arrow.png')} />
                    </Pressable>
                </View>
                <Text style={styles.titleText}>{auto.name}</Text>
            </View>
            <View style={styles.mapcontainer}>
                <Map
                    autoData={[auto]}
                    autoFilter={autoFilter}
                    latitude={auto.latitude}
                    longitude={auto.longitude}
                />
            </View>
            <View style={styles.container}>
                <Text>Водитель: {auto.driver}</Text>
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
        width: '90%',
        marginTop: 40,
        marginBottom: 20,
        flexDirection: 'row',
        textAlign: 'center'
    },
    return: {
        width: 40,
        height: 40,
    },
    returnButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginTop: 5,
    },
    title: {
        alignSelf: 'stretch',
        textAlign: 'center',
        marginLeft: 30,
        marginBottom: 20,
        marginTop: 30,
        backgroundColor: 'green',
    },
    titleText: {
        fontSize: 20,
        fontWeight: '700',
        width: '80%',
        textAlign: 'center',
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
