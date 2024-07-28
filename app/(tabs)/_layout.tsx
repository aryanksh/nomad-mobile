import FontAwesome from '@expo/vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import TripPlanner from './TripPlanner';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false, tabBarHideOnKeyboard: true }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />

      <Tabs.Screen
        name="TripPlanner"
        options={{
          title: 'Trip Planner',
          tabBarIcon: ({ color }) => <FontAwesome size={25} name="map" color={color} />,
        }}
      />
    </Tabs>
  );
}
