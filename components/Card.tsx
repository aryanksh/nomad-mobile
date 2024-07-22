import { View, Text, Image, StyleSheet } from 'react-native'
import { GOOGLE_MAPS_API_KEY } from '@/apiKey';
// import image1 from '@/assets/images/default-image.png';

export default function Card({ card }: { card: any }) {
    try {

        const imageURL = card.photos ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${card?.photos[0]?.photo_reference}&key=${GOOGLE_MAPS_API_KEY}` : require('@/assets/images/default-image.png');

        return (
            <View style={styles.container}>
                <Image
                    style={styles.cardImage}
                    source={{ uri: imageURL }}
                />

                <View style={styles.Card}>
                    <Text style={styles.cardName}>{card.name}</Text>
                    <Text style={styles.cardAddress}>{card.vicinity}</Text>
                    <Text style={styles.cardRating} >Rating: {card.rating}/5</Text>
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
    Card: {
        paddingLeft: 15,
        flex: 1
    },
    cardName: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: "bold"
    },
    cardAddress: {
        color: "#777",
        fontWeight: "500"
    },
    cardImage: {
        width: 110,
        height: 110,
        borderRadius: 10
    },
    cardRating: {
        color: "#f39c12",
        fontWeight: "500"
    }
});