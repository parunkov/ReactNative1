import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { PageHeaderProps } from '../types/types';


export default function PageHeader({ text , callback }: PageHeaderProps) {
    return (
        <View style={styles.titleContainer}>
            <View style={styles.return} >
                <Pressable style={styles.returnButton} onPress={callback}>
                    <Image source={require('../assets/arrow.png')} />
                </Pressable>
            </View>
            <Text style={styles.titleText}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
});
