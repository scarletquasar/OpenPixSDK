import { PixCharge } from "../models/pix/PixCharge.js";
import { getChargeAsync } from "../utils/chargeRestCaller.js";

class OpenPixConnection {
    constructor(authorization, type = "production") {
        this.setupConnection(authorization, type); 
    }

    _type = null;
    _cache = {};

    setupConnection = (newAuth, newType) => {
        typeof newAuth === 'string' ? 
        this._authorization = newAuth : {};

        this._headers = {
            'Authorization': this._authorization,
            'Cache-Control': 'no-cache'
        };

        this._type = newType;
    }

    getCharge = async (chargeId) => {
        if(!this._cache[chargeId]) {
            const result = await getChargeAsync({
                id: chargeId,
                callType: this._type,
                callHeaders: this._headers
            });
    
            result instanceof Object ?
            this._cache[chargeId] = result : {};

            return result.data;
        }

        return new PixCharge(this._cache[chargeId].data);
    };
}

export { OpenPixConnection }