import { OpenPixConnection } from "./connection/OpenPixConnection.js";
import { ConnectionType } from "./models/enums/ConnectionType.js";
var a = new OpenPixConnection("", ConnectionType.mockTests);

async function test() {
  var b = await a.startPayment({
    "pixKey": "c4249323-b4ca-43f2-8139-784baab09b93",
    "pixKeyType": "RANDOM",
    "value": 1,
    "correlationID": "pay1"
  });
  console.log(b);
}

test();