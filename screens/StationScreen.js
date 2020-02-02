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

  componentDidMount(){
    getStationVelib().then(data =>
      this.setState({ stations: data.records})
    )
    }

  render(){
    return (
      <View>
        <FlatList 
                data={this.state.stations}
                keyExtractor={(item) => item.recordid.toString()}
                renderItem={({ item }) => <StationItem stations={item}/>}/>
      </View>
    )
  }
}

StationScreen.navigationOptions = {
  title: "Vélibs",
};
export default StationScreen