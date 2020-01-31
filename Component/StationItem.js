import React from 'react';
import { View, StyleSheet, Text,FlatList} from 'react-native';

class StationItem extends React.Component{
    render(){
        return(
            <View style={styles.main_container}>
                <View style={styles.content}>
                    <Text>Test</Text>
                    
                </View>
            </View>
        )}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    block:{
        borderColor:'red',
        borderWidth:2,
        marginBottom:5,
    }
  });

export default StationItem