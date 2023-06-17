import { StyleSheet, Text, View, Pressable } from 'react-native';
import { AutoProps } from '../types/types';


export default function ListItem({ auto, isRusLang, callback }: AutoProps) {
    const onPress = () => {
        callback();
    };

    return (
        <Pressable style={styles.auto} onPress={onPress} >
            <Text style={styles.title}>{auto.name}</Text>
            <Text>{`${isRusLang ? 'Водитель' : 'Driver'}`}: {auto.driver}</Text>
            <Text>{`${isRusLang ? 'Категория' : 'Category'}`}: {auto.category}</Text>
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
