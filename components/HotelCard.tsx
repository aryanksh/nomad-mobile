import { View, Text, Image, StyleSheet } from 'react-native'
import { GOOGLE_MAPS_API_KEY } from '@/apiKey';

export default function HotelItem({ hotel }: { hotel: any }) {
    try {
        const imageURL = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${hotel?.photos[0]?.photo_reference}&key=${GOOGLE_MAPS_API_KEY}`;

        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: imageURL }}
                    style={styles.hotelImage}
                />

                <View style={styles.hotelCard}>
                    <Text style={styles.hotelName}>{hotel.name}</Text>
                    <Text style={styles.hoteladdress}>{hotel.vicinity}</Text>
                    <Text style={styles.hotelRating} >Rating: {hotel.rating}/5</Text>
                </View>
            </View>
        )
    } catch (error) {
        console.error('Error fetching hotels:', error);
    }
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        width: '100%',
        alignItems: "center",
        padding: 7
    },
    hotelCard: {
        paddingLeft: 15,
        flex: 1
    },
    hotelName: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: "bold"
    },
    hoteladdress: {
        color: "#777",
        fontWeight: "500"
    },
    hotelImage: {
        width: 110,
        height: 110,
        borderRadius: 10
    },
    hotelRating: {
        color: "#f39c12",
        fontWeight: "500"
    }
});