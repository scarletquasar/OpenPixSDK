const sources = {
    "production": {
        "baseUrl": "https://api.openpix.com.br",
        "charge": "/api/openpix/v1/charge",
        "createCharge": ""
    },
    "tests": {
        "baseUrl": "https://jsonplaceholder.typicode.com",
        "charge": "/todos/",
        "createCharge": ""
    },
    "mockTests": {
        "baseUrl": "https://raw.githubusercontent.com/EternalQuasar0206/OpenPixSDK/main/src/mocks/",
        "charge": "",
        "createCharge": "createChargeMock.json"
    }
};

export { sources }