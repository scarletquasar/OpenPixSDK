import { OpenPixConnection } from "./connection/OpenPixConnection.js";
import { ConnectionType } from "./models/enums/ConnectionType.js";

var a = new OpenPixConnection(
    "", 
    ConnectionType.production);

async function test() {
    var b = await a.createCharge({
        "correlationID": "9134e286-6f71-427a-bf00-241681624586",
        "value": 100,
        "comment": "good",
        "customer": {
          "name": "Dan",
          "taxID": "31324227036",
          "email": "email0@entria.com.br",
          "phone": "119912345670"
        },
        "additionalInfo": [
          {
            "key": "Product",
            "value": "Pencil"
          },
          {
            "key": "Invoice",
            "value": "18476"
          },
          {
            "key": "Order",
            "value": "302"
          }
        ]
      });
    console.log(b);
}

test()