import React from 'react';
import {StyleSheet,View,Text} from "react-native";
import MapView from "react-native-maps";
import OpenMap from "react-native-open-map";
import { Icon } from 'react-native-elements';

export default function Map(props) {
    const {location, name, height}=props;
    const openAppMap=()=>{
        OpenMap.show({
            latitude:location.latitude,
            longitude:location.longitude,
            zoom: 50,
        });
    }
    return (
        <View>
        <MapView
            style={{height: height, width: "100%"}}
            initialRegion={location}
           
        >
            <MapView.Marker
                coordinate={{
                    latitude:location.latitude,
                    longitude:location.longitude,
                }}
                title={name}
            />
        </MapView>
        <View style={styles.viewFavorites}>
            <Icon name="crosshairs-gps" type="material-community" color="#068"  onPress={openAppMap} />
        </View>
        </View>
    )
}
const styles=StyleSheet.create({
    viewFavorites:{
        position:"absolute",
		bottom:5,
		right:5,
		zIndex:2,
		backgroundColor:"#fff",
		borderRadius:20,
		padding:7,
    }
});
