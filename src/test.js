import { OpenPixConnection } from "./connection/OpenPixConnection.js";
import { ConnectionType } from "./models/enums/ConnectionType.js";

var a = new OpenPixConnection("", ConnectionType.mockTests);
async function test() {
    var b = await a.createPixQrCodeStatic({name: 1, correlationID: 1, value: 1, comment: 1, identifier: 1});
    console.log(b);
}

test()