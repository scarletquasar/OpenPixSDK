import { ConvertibleObject } from "../extensions/ConvertibleObject.js";

class PixWebhook extends ConvertibleObject {
    name = null;
    url = null;
    authorization = null;
    isActive = null;

    constructor(raw = []) {
        super();
        super.generateFromRaw(raw);
    }
}

export { PixWebhook }