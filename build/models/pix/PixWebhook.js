import { ConvertibleObject } from "../extensions/ConvertibleObject.js";

class PixWebhook extends ConvertibleObject {
  id = null;
  name = null;
  url = null;
  authorization = null;
  isActive = null;
  createdAt = null;
  updatedAt = null;

  constructor(raw = []) {
    super();
    super.generateFromRaw(raw);
  }

}

export { PixWebhook };