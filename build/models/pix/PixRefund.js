import { ConvertibleObject } from "../extensions/ConvertibleObject.js";

class PixRefund extends ConvertibleObject {
  value = null;
  correlationID = null;
  refundId = null;
  returnIdentification = null;

  constructor(raw = []) {
    super();
    super.generateFromRaw(raw);
  }

}

export { PixRefund };