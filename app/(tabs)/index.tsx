import React, { useState, useEffect, forwardRef } from 'react';
import { Text, View, StyleSheet } from "react-native";
import { Stack } from 'expo-router';
import axios from 'axios';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ title: 'Nomad' }} /> 
      <View style={styles.container}>
        {/* According to docs, adding "provider=PROVIDER_GOOGLE" to the MapView tag below should render a map from Google Maps */} 
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
  }
});
