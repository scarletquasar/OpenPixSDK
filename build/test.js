import { OpenPixConnection } from "./connection/OpenPixConnection.js";
import { ConnectionType } from "./models/enums/ConnectionType.js";
var a = new OpenPixConnection("", ConnectionType.mockTests);

async function test() {
  var b = await a.createCharge({
    correlationID: 1,
    value: 100,
    comment: "test"
  });
  console.log(b);
}

test();