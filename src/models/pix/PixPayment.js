import { ConvertibleObject } from "../extensions/ConvertibleObject.js";

class PixPayment extends ConvertibleObject {
    destination = null;
    status = null;
    value = null;
    correlationID = null;

    constructor(raw = []) {
        super();
        super.generateFromRaw(raw);
    }
}

export { PixPayment }