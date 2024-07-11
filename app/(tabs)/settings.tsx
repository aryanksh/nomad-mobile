import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Stack } from 'expo-router';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';


export default function Settings() {
  return (
    <>
      <Stack.Screen options={{ title: 'Nomad' }} />
      {/* <View style={styles.container}> */}
        {/* <Text>Home page</Text> */}
        <Text>{testAPI()}</Text>
      {/* </View> */}
    </>
  );
}

const testAPI = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    } 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Making API Requests</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    marginTop:70,
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
  },
});
