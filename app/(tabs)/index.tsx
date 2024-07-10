import { Text, View, StyleSheet } from "react-native";
import { Stack } from 'expo-router';


export default function Index() {
  return (
    <>
      <Stack.Screen options={{ title: 'Nomad' }} />
      <View style={styles.container}>
        <Text>Home page</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
