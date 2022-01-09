import { OpenPixConnection } from "./connection/OpenPixConnection.js";
import { ConnectionType } from "./models/enums/ConnectionType.js";
var a = new OpenPixConnection("", ConnectionType.mockTests);

async function test() {
  var b = await a.createRefund({
    value: 100,
    transactionEndToEndId: 1,
    correlationID: 1
  });
  console.log(b);
}

test();