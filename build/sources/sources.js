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
    "baseUrl": "https://raw.githubusercontent.com/EternalQuasar0206/OpenPixSDK/main/src/mocks/",
    "charge": ""
  }
};
export { sources };