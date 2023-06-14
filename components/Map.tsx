import { YaMap, Marker } from 'react-native-yamap';
import { Button, StyleSheet, Text, View } from 'react-native';

YaMap.init('63c7add9-7c2e-47de-9ad9-9b81d17c537f');

export default function Map() {

    return (
        <>
            <YaMap
                showUserPosition={false}
                rotateGesturesEnabled={false}
                nightMode={true}
                mapType={'vector'}
                initialRegion={{
                    lat: 30,
                    lon: 30,
                    zoom: 7,
                    azimuth: 0,
                }}
                style={styles.map}>
            </YaMap>
        </>
    );
}
const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '50vh',
    },
});
