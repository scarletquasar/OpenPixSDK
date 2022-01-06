import {OpenPixConnection} from "./connection/OpenPixConnection.js";

var a = new OpenPixConnection("", "tests");
async function test() {
    let b = await a.getCharge(1);
    console.log(b);
    let c = await a.getCharge(1);
    console.log(c);
}
test()