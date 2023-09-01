import { constants } from "../constants/constants";
import axios from 'axios';

const  BASE_URL: string = constants.URL;

export const fetchData = async (url:string) => {
    const response = await axios.get(BASE_URL + url);
    return response.data; 
}