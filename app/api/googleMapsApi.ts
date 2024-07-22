import { GOOGLE_MAPS_API_KEY } from "@/apiKey";
import axios from "axios";

const NEARBY_SEARCH_BASE_URL = "https://maps.googleapis.com/maps/api";

// currently hardcoded to the Empire State Building (lat: 40.7484405, lng: -73.98566439999999)
export const fetchNearBySelectLocation = (coords: any, type: String) => axios.get(`${NEARBY_SEARCH_BASE_URL}/place/nearbysearch/json?&location=${coords.lat},${coords.lng}&radius=5000&type=${type}&key=${GOOGLE_MAPS_API_KEY}`);

export const fetchCoords = (address: String) => axios.get(`${NEARBY_SEARCH_BASE_URL}/geocode/json?address=${address}&key=${GOOGLE_MAPS_API_KEY}`)
