import axios from "axios";
import { sources } from "../sources/sources.js";

const getChargeAsync = async (request) => {
    const baseUrl = sources[request.callType]["baseUrl"];
    const route = sources[request.callType]["charge"];

    if(request.id) {
        return await axios.get(baseUrl + route + `/${request.id}`, {
            headers: request.callHeaders
        });
    }
    
};