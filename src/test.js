import { OpenPixConnection } from "./connection/OpenPixConnection.js";
import { ConnectionType } from "./models/enums/ConnectionType.js";

var a = new OpenPixConnection("", ConnectionType.mockTests);
async function test() {
    var b = await a.deleteWebhook({id: 1});
    console.log(b);
}

test()