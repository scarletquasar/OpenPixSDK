class OpenPixConnection {
    constructor(authorization) {
        setAuthorization(authorization); 
    }

    setAuthorization = (newAuth) => {
        typeof newAuth === 'string' ? 
        this._authorization = newAuth : {};

        this._headers = {
            'Authorization': this._authorization
        };
    }

    getCharge = () => {};
}