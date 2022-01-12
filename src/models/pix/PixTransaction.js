import { ConvertibleObject } from "../extensions/ConvertibleObject.js";
import { PixCharge } from "./PixCharge.js";
import { PixCustomer } from "./PixCustomer.js";

class PixTransaction extends ConvertibleObject {
    customer = null;
    payer = null;
    charge = null;
    infoPagador = null;
    value = null;
    time = null;
    transactionID = null;
    endToEndId = null;
    globalID = null;

    constructor(raw = []) {
        super();
        super.generateFromRaw(raw);
        this.customer = new PixCustomer(this.customer);
        this.payer = new PixCustomer(this.payer);
        this.charge = new PixCharge(this.charge);
    }
}

export { PixTransaction }