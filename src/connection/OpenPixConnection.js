class OpenPixConnection {
    constructor(authorization, type = "production") {
        setAuthorization(authorization); 
    }

    _cache = {};

    setAuthorization = (newAuth) => {
        typeof newAuth === 'string' ? 
        this._authorization = newAuth : {};

        this._headers = {
            'Authorization': this._authorization,
            'Cache-Control': 'no-cache'
        };
    }

    getCharge = (id) => {};
}