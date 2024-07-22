import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import MapView from 'react-native-maps';

export default function AppMapView() {
  const mapRegion = {
    latitude: 40.7484405, 
    longitude: -73.98566439999999,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0421
  }

  // const [mapRegion, setMapRegion] = useState({
  //   latitude: 40.7484405, 
  //   longitude: -73.98566439999999,
  //   latitudeDelta: 0.0522,
  //   longitudeDelta: 0.0421
  // })

  return (
    <View>
      <MapView 
      style={styles.map}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: Dimensions.get('screen').height * 0.45
  }
})