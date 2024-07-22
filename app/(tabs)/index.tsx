import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from '@/components/SearchBar';
import { fetchNearBySelectLocation, fetchCoords } from '@/app/api/googleMapsApi'
import ListToRender from '@/components/ListToRender';
import AppMapView from '@/components/AppMapView';


export default function Index() {

  //TODO: find a way for application to not remember previous state upon reload (how to reset state every time app loads)
  const [selectedLocationAddress, setSelectedLocationAddress] = useState([]);
  const [coords, setCoords] = useState([]);
  const [hotelList, setHotelList] = useState([]);
  const [activitiesList, setActivitiesList] = useState([]);
  const [placesList, setPlacesList] = useState([]);

  useEffect(() => {
    if (selectedLocationAddress) {
      console.log("useEffect(): ", selectedLocationAddress);
      
      handleSelectLocation();
    }
  }, [selectedLocationAddress])

  const types = ["lodging", "tourist_attraction", "point_of_interest"];

  const handleSelectLocation = async () => {
    var testCoords;
    await fetchCoords(selectedLocationAddress.toString()).then(response => {
      console.log("response: ", response.data.results[0].geometry.location)

      testCoords = response.data.results[0].geometry.location;
      console.log("testCoords : ", testCoords);

      setCoords(testCoords);
      console.log("coords (main): ", coords);
    });

    // fetch hotels of selected location
    fetchNearBySelectLocation(testCoords, types[0]).then(response => {
      // console.log("index.tsx hotels: ", response.data.results)
      setHotelList(response.data.results);
    })

    // fetch activities of selected location
    fetchNearBySelectLocation(testCoords, types[1]).then(response => {
      // console.log("index.tsx activities: ", response.data.results)
      setActivitiesList(response.data.results);
    })

    // fetch places of selected location
    fetchNearBySelectLocation(testCoords, types[2]).then(response => {
      // console.log("index.tsx places: ", response.data.results)
      setPlacesList(response.data.results);
    })
  }

  return (
    <>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.headerContainer}>
          <SearchBar searchedLocation={(location: any) => setSelectedLocationAddress(location)} />
        </View>
        <AppMapView />

        {hotelList.length > 0 ? <ListToRender list={hotelList} typeOfList={"Hotels"} /> : null}
        {activitiesList.length > 0 ? <ListToRender list={activitiesList} typeOfList={"Activities"} /> : null}
        {placesList.length > 0 ? <ListToRender list={placesList} typeOfList={"Places"} /> : null}

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    zIndex: 10,
    padding: 10,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 45
  },
});
