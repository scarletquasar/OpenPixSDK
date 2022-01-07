class PixCharge {
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

  constructor(raw) {
    Object.entries(raw).forEach(([key, value]) => {
      this.hasOwnProperty(key) ? this[key] = value : {};
    });
  }

}

export { PixCharge };