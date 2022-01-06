import axios from "axios";
import { sources } from "../sources/sources.js";

const getChargeAsync = async (request) => {
    const baseUrl = sources[request.callType]["baseUrl"];
    const route = sources[request.callType]["charge"];
    let result = {};

    result[request.id] = null;

    if(request.id) {
        result = await axios.get(baseUrl + route + `/${request.id}`, {
            headers: request.callHeaders
        });
        return result;
    }
    
    result[request.id] = await axios.get(baseUrl + route, {
        headers: request.callHeaders
    });
    return result;
};

export { getChargeAsync }