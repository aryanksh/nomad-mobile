import { GOOGLE_MAPS_API_KEY } from "@/apiKey";
import axios from "axios";

const NEARBY_SEARCH_BASE_URL = "https://maps.googleapis.com/maps/api/place";

// currently hardcoded to the New York
export const fetchHotels = () => axios.get(`${NEARBY_SEARCH_BASE_URL}/nearbysearch/json?&location=${40.7484405},${-73.98566439999999}&radius=5000&type=lodging&key=${GOOGLE_MAPS_API_KEY}`);


