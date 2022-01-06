import { getChargeAsync } from "../utils/chargeRestCaller.js";

class OpenPixConnection {
    constructor(authorization, type = "production") {
        setupConnection(authorization); 
    }

    _type = null;
    _cache = {};

    setupConnection = (newAuth) => {
        typeof newAuth === 'string' ? 
        this._authorization = newAuth : {};

        this._headers = {
            'Authorization': this._authorization,
            'Cache-Control': 'no-cache'
        };

        this._type = type;
    }

    getCharge = async (chargeId) => {
        if(!this._cache[chargeId]) {
            const result = await getChargeAsync({
                id: chargeId,
                callType: this._type,
                callHeaders: this._headers
            });
    
            result instanceof 'Object' ?
            this._cache = {...this._cache, ...result} : {};

            return result[chargeId];
        }
        return this._cache[chargeId];
    };
}