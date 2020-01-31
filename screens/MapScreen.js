import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps'

export default class MapScreen extends React.Component {
  
  componentDidMount(){
    navigator.geolocation.getCurrentPosition((postion) => {
      var lat = parseFloat(postion.coords.latitude)
      var long = parseFloat(postion.coords.longitude)

      var initialRegion ={
        latitude:lat,
        longitude:long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }

      this.setState({initialPosition:initialRegion})
    },
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})
  }

  render(){  
  return (
    <View style={styles.container}>
      <MapView style={styles.maps}
        showsUserLocation={true}
        followsUserLocation={true}
        region={{
          latitude:48.866667,
          longitude:2.333333,
          latitudeDelta: 1,
          longitudeDelta: 1
         }}
         showsCompass={true}>
           
      </MapView>
    </View>
  );
}
}

MapScreen.navigationOptions = {
  title: 'Map',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  maps:{
    flex:1
  }
});
