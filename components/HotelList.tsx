import { View, Text, StyleSheet, FlatList } from 'react-native'
import HotelItem from './HotelCard';

export default function HotelList({ hotelList }: { hotelList: any }) {
  try {
    return (
      <View style={styles.title}>
        <Text style={{ fontSize: 20, paddingLeft: 10 }}>Found {hotelList.length} Hotels </Text>

        <FlatList
          data={hotelList}
          renderItem={({ item }) => (
            <HotelItem hotel={item} />
          )}
          scrollEnabled={false}
        />
      </View>
    )
  } catch (error) {
    console.error('Error fetching hotels:', error);
  }

};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginTop: 10,
  }

});
