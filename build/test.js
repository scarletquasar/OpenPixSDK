import { OpenPixConnection } from "./connection/OpenPixConnection.js";
var a = new OpenPixConnection("", "tests");

async function test() {
  let b = await a.getCharge();
  console.log(b);
}

test();