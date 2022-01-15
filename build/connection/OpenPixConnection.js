import { ConnectionType } from "../models/enums/ConnectionType.js";
import { getCharge, createCharge, getRefund, createRefund, getCustomer, createCustomer, getTransaction, createPayment, confirmPayment, getPixQrCode, createPixQrCodeStatic, createWebhook, getWebhooks, deleteWebhook, getChargeImageQrCode } from "../utils/restCaller.js";
import { genericErrors } from "../models/errors/genericErrors.js";
import { PixRefund } from "../models/pix/PixRefund.js";
import { PixCharge } from "../models/pix/PixCharge.js";
import { PixCustomer } from "../models/pix/PixCustomer.js";
import { PixTransaction } from "../models/pix/PixTransaction.js";
import { PixPayment } from "../models/pix/PixPayment.js";
import { PixQrCode } from "../models/pix/PixQrCode.js";
import { PixWebhook } from "../models/pix/PixWebhook.js";

class OpenPixConnection {
  constructor(authorization, type = ConnectionType.production) {
    this.setupConnection(authorization, type);
  }

  _type = null;
  _cache = {
    charges: {},
    refunds: {},
    customers: {},
    transactions: {},
    pixQrCodes: {},
    webhooks: {}
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
      const result = await getCharge({
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
    const result = await createCharge({
      callType: this._type,
      callHeaders: this._headers,
      body: chargeBody
    });
    return new PixCharge(result.data);
  };
  getRefund = async refundId => {
    if (!this._cache.refunds[refundId]) {
      const result = await getRefund({
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
    const result = await createRefund({
      callType: this._type,
      callHeaders: this._headers,
      body: refundBody
    });
    return new PixRefund(result.data);
  };
  getCustomer = async customerId => {
    if (!this._cache.customers[customerId]) {
      const result = await getCustomer({
        id: customerId,
        callType: this._type,
        callHeaders: this._headers
      });
      result.data instanceof Object && customerId ? this._cache.customers[customerId] = result.data : {};
      return new PixCustomer(result.data.customer);
    }

    return new PixCustomer(this._cache.customers[customerId].data.charge);
  };
  createCustomer = async customerBody => {
    if (!customerBody.name) throw new Error(genericErrors.requiredFieldRequired + "name");
    const result = await createCustomer({
      callType: this._type,
      callHeaders: this._headers,
      body: customerBody
    });
    return new PixCustomer(result.data.customer);
  };
  getTransaction = async transactionId => {
    if (!this._cache.transactions[transactionId]) {
      const result = await getTransaction({
        id: transactionId,
        callType: this._type,
        callHeaders: this._headers
      });
      result.data instanceof Object && transactionId ? this._cache.transactions[transactionId] = result.data : {};
      return new PixTransaction(result.data.transaction);
    }

    return new PixTransaction(this._cache.transactions[customerId].data.transaction);
  };
  startPayment = async paymentBody => {
    if (!paymentBody.correlationID) throw new Error(genericErrors.requiredFieldRequired + "correlationID");
    if (!paymentBody.pixKey) throw new Error(genericErrors.requiredFieldRequired + "pixKey");
    if (!paymentBody.pixKeyType) throw new Error(genericErrors.requiredFieldRequired + "pixKeyType");
    if (!paymentBody.value) throw new Error(genericErrors.requiredFieldRequired + "value");
    const result = await createPayment({
      callType: this._type,
      callHeaders: this._headers,
      body: paymentBody
    });
    return new PixPayment(result.data.payment);
  };
  confirmPayment = async paymentBody => {
    if (!paymentBody.correlationID) throw new Error(genericErrors.requiredFieldRequired + "correlationID");
    const result = await confirmPayment({
      callType: this._type,
      callHeaders: this._headers,
      body: paymentBody
    });
    return new PixPayment(result.data.payment);
  };
  getPixQrCode = async pixQrCodeId => {
    if (!this._cache.pixQrCodes[pixQrCodeId]) {
      const result = await getPixQrCode({
        id: pixQrCodeId,
        callType: this._type,
        callHeaders: this._headers
      });
      result.data instanceof Object && pixQrCodeId ? this._cache.pixQrCodes[pixQrCodeId] = result.data : {};
      return new PixQrCode(result.data.pixQrCode);
    }

    return new PixQrCode(this._cache.pixQrCodes[pixQrCodeId].data.pixQrCode);
  };
  createPixQrCodeStatic = async pixQrCodeBody => {
    if (!pixQrCodeBody.name) throw new Error(genericErrors.requiredFieldRequired + "name");
    if (!pixQrCodeBody.correlationID) throw new Error(genericErrors.requiredFieldRequired + "correlationID");
    if (!pixQrCodeBody.value) throw new Error(genericErrors.requiredFieldRequired + "value");
    if (!pixQrCodeBody.comment) throw new Error(genericErrors.requiredFieldRequired + "comment");
    if (!pixQrCodeBody.identifier) throw new Error(genericErrors.requiredFieldRequired + "identifier");
    const result = await createPixQrCodeStatic({
      callType: this._type,
      callHeaders: this._headers,
      body: pixQrCodeBody
    });
    return new PixQrCode(result.data.pixQrCode);
  };
  createWebhook = async webhookBody => {
    if (!webhookBody.url) throw new Error(genericErrors.requiredFieldRequired + "url");
    const result = await createWebhook({
      callType: this._type,
      callHeaders: this._headers,
      body: webhookBody
    });
    return new PixWebhook(result.data.webhook);
  };
  getWebhooks = async webhookUrl => {
    if (!this._cache.webhooks[webhookUrl]) {
      const result = await getWebhooks({
        id: webhookUrl,
        callType: this._type,
        callHeaders: this._headers
      });
      result.data instanceof Object && webhookUrl ? this._cache.webhooks[webhookUrl] = result.data : {};
      return result.data.webhooks.map(w => new PixWebhook(w));
    }

    return this._cache.transactions[customerId].data.webhooks.map(w => new PixWebhook(w));
  };
  deleteWebhook = async requestBody => {
    if (!requestBody.id) throw new Error(genericErrors.requiredFieldRequired + "id");
    const result = await deleteWebhook({
      callType: this._type,
      callHeaders: this._headers,
      body: requestBody
    });
    return result.data;
  };
  getChargeImageQrCode = async (id, size) => {
    let query = `?${id}.png&size=${size}`;
    if (!id) throw new Error(genericErrors.requiredFieldRequired + "id");
    if (!size) throw new Error(genericErrors.requiredFieldRequired + "size");
    const result = await getChargeImageQrCode({
      callType: this._type,
      callHeaders: this._headers
    }, query);
    return result.data;
  };
}

export { OpenPixConnection };