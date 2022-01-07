const sources = {
    "production": {
        "baseUrl": "https://api.openpix.com.br",
        "charge": "/api/openpix/v1/charge"
    },
    "tests": {
        "baseUrl": "https://jsonplaceholder.typicode.com",
        "charge": "/todos/"
    },
    "mockTests": {
        "baseUrl": "/src/mocks",
        "charge": "chargeMock.json"
    }
};

export { sources }