import React, { useState, useEffect, forwardRef } from 'react';
import { Text, View, StyleSheet } from "react-native";
import { Stack } from 'expo-router';
import axios from 'axios';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 
import SearchBar from '@/components/SearchBar';

export default function Index() {
  return (
    <>
      <View>
        <View style={styles.headerContainer}>
          <SearchBar searchedLocation={(location: any) => console.log(location)}/>
        </View>
        
        <MapView style={styles.map} /> 
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginBottom:270,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    height: '100%',
    width: '100%'
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
