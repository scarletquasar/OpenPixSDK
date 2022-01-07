import { ConvertibleObject } from "../extensions/ConvertibleObject.js";

class PixCharge extends ConvertibleObject {
  status = null;
  customer = null;
  value = null;
  comment = null;
  correlationID = null;
  paymentLinkID = null;
  paymentLinkUrl = null;
  globalID = null;
  qrCodeImage = null;
  brCode = null;
  additionalInfo = null;
  createdAt = null;
  updatedAt = null;

  constructor(raw = []) {
    super();
    super.generateFromRaw(raw);
  }

}

export { PixCharge };