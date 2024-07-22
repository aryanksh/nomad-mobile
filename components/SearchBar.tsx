import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_API_KEY } from '@/apiKey'

export default function SearchBar({ searchedLocation }: { searchedLocation: any }) {
    return (
        <View>
            <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details = null) => {
                    searchedLocation(details?.formatted_address) // returns address
                }}
                enablePoweredByContainer={false}
                fetchDetails={true}
                query={{
                    key: GOOGLE_MAPS_API_KEY,
                    language: 'en',
                }}
                disableScroll={true}
                listViewDisplayed={false}
            />
        </View>
    )
}