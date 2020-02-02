import React from 'react';
import { View, StyleSheet, Text,FlatList} from 'react-native';
import StationScreen from '../screens/StationScreen';

class StationItem extends React.Component{
    render(){
        const stations = this.props.stations
        return(
            <View style={styles.main_container}>
                <View style={styles.content}>
                <Text>Nom de la station : {stations.fields.station_name}</Text>
                <Text>Nombre de dock libre : {stations.fields.nbfreeedock}</Text>
                <Text>Nombre de dock total : {stations.fields.nbedock}</Text>
                <Text>Nombre de Vélib disponible : {stations.fields.nbebike}</Text>
                <Text>Kiosk ouvert : {stations.fields.kioskstate}</Text>
                <Text>Status : {stations.fields.station_state}</Text>
                </View>
            </View>
        )}
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content:{
        borderColor:'red',
        borderWidth:2,
        margin:5,
        padding:5,
    }
  });

export default StationItem