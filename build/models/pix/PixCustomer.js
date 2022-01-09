import { ConvertibleObject } from "../extensions/ConvertibleObject.js";

class PixCustomer extends ConvertibleObject {
  name = null;
  email = null;
  phone = null;
  taxID = null;
  correlationID = null;

  constructor(raw = []) {
    super();
    super.generateFromRaw(raw);
  }

}

export { PixCustomer };