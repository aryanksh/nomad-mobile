import React, { useState, useEffect, forwardRef } from 'react';
import { Text, View, StyleSheet, ScrollView } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 
import SearchBar from '@/components/SearchBar';
import { fetchHotels } from '@/app/api/googleMapsApi'
import HotelList from '@/components/HotelList';


export default function Index() {

  //TODO: find a way for application to not remember previous state upon reload
  const[selectedLocation, setSelectedLocation] = useState([]);
  const[hotelList, setHotelList] = useState([]);
  useEffect(() => {
    console.log(selectedLocation);
    if (selectedLocation) {
      getHotels();
    }
  }, [selectedLocation])

  const getHotels = () => {
    fetchHotels().then(response => {
      console.log(response.data.results)
      setHotelList(response.data.results);
    })
  }

  return (
    <>
      <ScrollView>
        <View style={styles.headerContainer}>
          <SearchBar searchedLocation={(location: any) => setSelectedLocation(location) }/>
        </View>
        <MapView style={styles.map} />
        
        {hotelList.length > 0? <HotelList hotelList={hotelList} /> : null}
      
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    height: '20%',
    width: '100%',
  },
  headerContainer: {
    position:'absolute',
    zIndex: 10,
    padding: 10,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 45
  },
});
