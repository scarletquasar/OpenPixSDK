import { ConvertibleObject } from "../extensions/ConvertibleObject.js";

class PixQrCode extends ConvertibleObject {
    name = null;
    value = null;
    comment = null;
    correlationID = null;
    identifier = null;
    paymentLinkID = null;
    paymentLinkUrl = null;
    qrCodeImage = null;
    brCode = null;
    createdAt = null;
    updatedAt = null;

    constructor(raw = []) {
        super();
        super.generateFromRaw(raw);
    }
}

export { PixQrCode }