import { View, Text, Image, StyleSheet } from 'react-native'
import { GOOGLE_MAPS_API_KEY } from '@/apiKey';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useStarred } from './StarredContext';
// import image1 from '@/assets/images/default-image.png';

export default function Card({ card }: { card: any }) {
    try {
        const { starredItems, toggleStarredItem } = useStarred();
        const isStarred = starredItems.some(item => item.name === card.name);

        const handleToggleStar = () => {
            toggleStarredItem(card);
        }

        const imageURL = card.photos ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${card?.photos[0]?.photo_reference}&key=${GOOGLE_MAPS_API_KEY}` : require('@/assets/images/default-image.png');

        const rating = card.rating > 0 ? `Rating: ${card.rating} / 5` : 'No Rating';

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
                    <TouchableOpacity
                        style={[styles.starButton, isStarred ? styles.starred : styles.unstarred]}
                        onPress={handleToggleStar}
                    >
                        <Text style={styles.starButtonText}>{isStarred ? 'Deselect' : 'Select'}</Text>
                    </TouchableOpacity>
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
        padding: 7,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
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
    },
    starButton: {
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    starred: {
        backgroundColor: '#ffcc00',
    },
    unstarred: {
        backgroundColor: '#ccc',
    },
    starButtonText: {
        color: '#fff',
    },
});