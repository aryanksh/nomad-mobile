import React, { useState, useEffect, forwardRef } from 'react';
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Stack } from 'expo-router';
import axios from 'axios';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// const MapViewWithRef = React.forwardRef((props, ref) => (
//   <MapView ref={ref} {...props} />
// ));

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ title: 'Nomad' }} />
      <View style={styles.container}>
        <Text>Home page</Text>
        <MapView style={styles.map} provider={PROVIDER_GOOGLE}/>
        {/* <MapViewWithRef style={styles.map} provider={PROVIDER_GOOGLE} /> */}
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
