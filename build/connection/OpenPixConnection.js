import { PixCharge } from "../models/pix/PixCharge.js";
import { ConnectionType } from "../models/enums/ConnectionType.js";
import { getChargeAsync, createChargeAsync, getRefundAsync, createRefundAsync } from "../utils/chargeRestCaller.js";
import { genericErrors } from "../models/errors/genericErrors.js";
import { PixRefund } from "../models/pix/PixRefund.js";

class OpenPixConnection {
  constructor(authorization, type = ConnectionType.production) {
    this.setupConnection(authorization, type);
  }

  _type = null;
  _cache = {
    charges: {},
    refunds: {}
  };
  setupConnection = (newAuth, newType) => {
    typeof newAuth === 'string' ? this._authorization = newAuth : {};
    this._headers = {
      'Authorization': this._authorization,
      'Cache-Control': 'no-cache'
    };
    this._type = newType[1];
  };
  getCharge = async chargeId => {
    if (!this._cache.charges[chargeId]) {
      const result = await getChargeAsync({
        id: chargeId,
        callType: this._type,
        callHeaders: this._headers
      });
      result.data instanceof Object && chargeId ? this._cache.charges[chargeId] = result.data : {};
      return new PixCharge(result.data.charge);
    }

    return new PixCharge(this._cache.charges[chargeId].data.charge);
  };
  createCharge = async chargeBody => {
    if (!chargeBody.correlationID) throw new Error(genericErrors.requiredFieldRequired + "correlationID");
    if (!chargeBody.value) throw new Error(genericErrors.requiredFieldRequired + "value");
    const result = await createChargeAsync({
      callType: this._type,
      callHeaders: this._headers,
      body: chargeBody
    });
    return new PixCharge(result.data.charge);
  };
  getRefund = async refundId => {
    if (!this._cache.refunds[refundId]) {
      const result = await getRefundAsync({
        id: refundId,
        callType: this._type,
        callHeaders: this._headers
      });
      result.data instanceof Object && refundId ? this._cache.refunds[refundId] = result.data : {};
      return new PixRefund(result.data.refund);
    }

    return new PixRefund(this._cache.refunds[refundId].data.charge);
  };
  createRefund = async refundBody => {
    if (!refundBody.value) throw new Error(genericErrors.requiredFieldRequired + "value");
    if (!refundBody.transactionEndToEndId) throw new Error(genericErrors.requiredFieldRequired + "transactionEndToEndId");
    if (!refundBody.correlationID) throw new Error(genericErrors.requiredFieldRequired + "correlationID");
    const result = await createRefundAsync({
      callType: this._type,
      callHeaders: this._headers,
      body: refundBody
    });
    return new PixRefund(result.data.refund);
  };
}

export { OpenPixConnection };