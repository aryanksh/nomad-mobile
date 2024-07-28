import { useStarred } from "@/components/StarredContext";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";

export default function TripPlanner() {
    const { starredItems } = useStarred();
    const [days, setDays] = useState<string[]>(['Day 1', 'Day 2', 'Day 3']);
    const [dayItems, setDayItems] = useState<{ [key: string]: any[] }>({});

    const addDay = () => {
        setDays(prevDays => [...prevDays, `Day ${prevDays.length + 1}`]);
    };

    const removeDay = (index: number) => {
        const newDays = days.filter((_, i) => i !== index);
        const newDayItems: { [key: string]: any[] } = {};

        newDays.forEach((day, i) => {
            newDayItems[`Day ${i + 1}`] = dayItems[`Day ${i + 1}`] || [];
        });

        setDays(newDays);
        setDayItems(newDayItems);
    };

    const moveItemsToDay = (item: any, dayIndex: number) => {
        const dayName = `Day ${dayIndex + 1}`;
        setDayItems(prevDayItems => {
          if (prevDayItems[dayName]?.some(i => i === item)) {
            return prevDayItems;
          }
          return {
            ...prevDayItems,
            [dayName]: [...(prevDayItems[dayName] || []), item],
          };
        });
    };

    const removeItemFromDay = (item: any, day: string) => {
        setDayItems(prevDayItems => ({
            ...prevDayItems,
            [day]: prevDayItems[day].filter(i => i !== item),
          }));
    };

    return (
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <ScrollView style={styles.dayContainer}>
              {days.map((day, index) => (
                <View style={styles.dayContainer} key={index}>
                  <Text style={styles.dayTitle}>{day}</Text>
                  {/* List of items moved to this day */}
                  {dayItems[day]?.map((item, idx) => (
                    <View style={styles.itemContainer} key={idx}>
                      <TouchableOpacity style={styles.removeButton} onPress={() => removeItemFromDay(item, day)}>
                        <MaterialIcons name="remove" size={24} color="white" />
                      </TouchableOpacity>
                      <Image source={{ uri: item.imageUrl || 'https://via.placeholder.com/300x150' }} style={styles.itemImage} />
                      <View style={styles.itemDetails}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemVicinity}>{String(item.vicinity)}</Text> 
                        <View style={styles.itemRating}>
                          <MaterialIcons name="star" size={20} color="yellow" />
                          <Text style={styles.ratingText}>{String(item.rating)}</Text> 
                        </View>
                      </View>
                    </View>
                  ))}
                  <TouchableOpacity style={styles.removeDayButton} onPress={() => removeDay(index)}>
                    <Text style={styles.removeDayText}>Remove Day</Text>
                  </TouchableOpacity>
                </View>
              ))}
              <TouchableOpacity style={styles.addDayContainer} onPress={addDay}>
                <MaterialIcons name="add" size={24} color="white" />
                <Text style={styles.addDayText}>Add Day</Text>
              </TouchableOpacity>
              <View style={styles.starredItemsContainer}>
                <Text style={styles.starredTitle}>Starred Items</Text>
                {starredItems.length === 0 ? (
                  <Text style={styles.noStarredItems}>No Starred Items</Text>
                ) : (
                  starredItems.map((item, index) => (
                    <View style={styles.starredItemContainer} key={index}>
                      <Image source={{ uri: item.imageUrl || 'https://via.placeholder.com/300x150' }} style={styles.starredItemImage} />
                      <View style={styles.starredItemDetails}>
                        <Text style={styles.starredItemName}>{item.name}</Text>
                        <Text style={styles.starredItemVicinity}>{String(item.vicinity)}</Text> 
                        <View style={styles.starredItemRating}>
                          <MaterialIcons name="star" size={20} color="yellow" />
                          <Text style={styles.ratingText}>{String(item.rating)}</Text> 
                        </View>
                      </View>
                      <TouchableOpacity style={styles.addItemButton} onPress={() => moveItemsToDay(item, 0)}> 
                        <Text style={styles.addItemButtonText}>Add to Day 1</Text>
                      </TouchableOpacity>
                    </View>
                  ))
                )}
              </View>
            </ScrollView>
          </View>
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#182833',
    },
    contentContainer: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 16,
    },
    daysContainer: {
        flex: 1,
        padding: 8,
    },
    dayContainer: {
        width: '100%',
        padding: 8,
        marginBottom: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 8,
    },
    dayTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 8,
    },
    itemContainer: {
        position: 'relative',
        padding: 8,
        marginBottom: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 8,
    },
    removeButton: {
        position: 'absolute',
        top: 4,
        right: 4,
        backgroundColor: 'red',
        borderRadius: 4,
        padding: 4,
        zIndex: 1000,
    },
    itemImage: {
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    itemDetails: {
        marginTop: 8,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    itemVicinity: {
        fontSize: 14,
        color: 'white',
    },
    itemRating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        marginLeft: 4,
        color: 'yellow',
    },
    removeDayButton: {
        marginTop: 8,
        padding: 8,
        backgroundColor: 'red',
        borderRadius: 4,
        alignItems: 'center',
    },
    removeDayText: {
        color: 'white',
        fontWeight: 'bold',
    },
    addDayContainer: {
        width: '100%',
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    addDayText: {
        marginLeft: 8,
        color: 'white',
        fontWeight: 'bold',
    },
    starredItemsContainer: {
        padding: 8,
    },
    starredTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 8,
    },
    starredItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: 8,
        borderRadius: 8,
    },
    starredItemImage: {
        width: 50,
        height: 50,
        borderRadius: 8,
    },
    starredItemDetails: {
        marginLeft: 8,
    },
    starredItemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    starredItemVicinity: {
        fontSize: 14,
        color: 'white',
    },
    starredItemRating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    addItemButton: {
        marginLeft: 'auto',
        padding: 8,
        backgroundColor: 'green',
        borderRadius: 4,
    },
    addItemButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    noStarredItems: {
        fontSize: 16, 
        color: 'white',
        textAlign: 'center',
        marginVertical: 16,
    }
});

