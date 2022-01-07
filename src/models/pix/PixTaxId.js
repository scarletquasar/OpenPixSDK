import { ConvertibleObject } from "./extensions/ConvertibleObject.js";

class PixTaxId extends ConvertibleObject {
    taxID = null;
    type = null;

    constructor(raw) {
        super();
        super.generateFromRaw(raw);
    }
}

export { PixTaxId }