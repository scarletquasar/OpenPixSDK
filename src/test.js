import { OpenPixConnection } from "./connection/OpenPixConnection.js";
import { ConnectionType } from "./models/enums/ConnectionType.js";

var a = new OpenPixConnection("", ConnectionType.mockTests);
async function test() {
    var b = await a.getTransaction();
    console.log(b);
}

test()