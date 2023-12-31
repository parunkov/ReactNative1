import { StyleSheet } from 'react-native';
import { Auto, MapProps } from '../types/types';
import MapView, { Marker } from 'react-native-maps';


export default function Map({ autoData, autoFilter, latitude, longitude, isRusLang }: MapProps) {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.2,
                longitudeDelta: 0.2,
            }}
        >
            {autoData.map((item: Auto, key) => {
                const coords = {
                    latitude: item.latitude,
                    longitude: item.longitude
                };
                let image = require('../assets/blue-marker.png');
                if (item.category === 'Пассажирский') image = require('../assets/green-marker.png');
                if (item.category === 'Спецтранспорт') image = require('../assets/red-marker.png');
                return autoFilter[item.category] && <Marker
                    key={key}
                    coordinate={coords}
                    title={isRusLang ? item.name : item.nameEng}
                    image={image}
                />;
            })}
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
});
