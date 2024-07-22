import { View, Text, StyleSheet, FlatList } from 'react-native'
import Card from './Card';

export default function ListToRender({ list, typeOfList }: { list: any, typeOfList: any }) {
  try {
    return (
      <View style={styles.title}>
        <Text style={{ fontSize: 20, paddingLeft: 10 }}>Found {list.length} {typeOfList} </Text>

        <FlatList
          data={list}
          renderItem={({ item }) => (
            <Card card={item} />
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
