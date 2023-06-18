import { StyleSheet, Text, View, Pressable } from 'react-native';
import { AutoProps } from '../types/types';


export default function ListItem({ auto, isRusLang, callback }: AutoProps) {
    const onPress = () => {
        callback();
    };

    return (
        <Pressable style={styles.auto} onPress={onPress} >
            <Text style={styles.title}>{isRusLang ? auto.name : auto.nameEng}</Text>
            <Text>{`${isRusLang ? 'Водитель' : 'Driver'}`}: {isRusLang ? auto.driver : auto.driverEng}</Text>
            <Text>{`${isRusLang ? 'Категория' : 'Category'}`}: {isRusLang ? auto.category : auto.categoryEng}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    auto: {
        width: '100%',
        borderColor: 'rgb(33, 150, 243)',
        borderWidth: 1,
        padding: 5,
        marginBottom: 10,
        borderRadius: 5
    },
    title: {
        fontWeight: '700',
        fontSize: 18
    }
});
