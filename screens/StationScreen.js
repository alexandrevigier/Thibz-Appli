import React from 'react';
import {FlatList,Text, Button, View} from 'react-native'
import {getStationVelib} from '../API/VelibApi';
import StationItem from '../Component/StationItem';



class StationScreen extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      stations: []
    }
  }

  _loadStations(){
    getStationVelib.then(
      this.setState({ stations: data.results})
    )
    }

  render(){
    return (
      <View>
        <Button title="Station vélib" onPress={() => this._loadStations()}/>
        <Text>TEST</Text>
        <FlatList 
                data={this.state.stations}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => console.log(item)}/>
      </View>
    )
  }
}

StationScreen.navigationOptions = {
  title: "Vélibs",
};
export default StationScreen