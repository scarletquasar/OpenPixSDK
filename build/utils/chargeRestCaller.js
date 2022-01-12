import axios from "axios";
import { sources } from "../sources/sources.js";
import { genericErrors } from "../models/errors/genericErrors.js";
import { PixCharge } from "../models/pix/PixCharge.js";
import { PixRefund } from "../models/pix/PixRefund.js";

const getConnectionParams = (request, routeName) => {
  const baseUrl = sources[request.callType]["baseUrl"];
  const route = sources[request.callType][routeName];
  return {
    baseUrl,
    route
  };
};

const getChargeAsync = async request => {
  const params = getConnectionParams(request, "charge");
  let result = {};
  result[request.id] = null;

  if (request.id) {
    result = await axios.get(params.baseUrl + params.route + `/${request.id}`, {
      headers: request.callHeaders
    }).catch(e => {
      console.error(e);
      throw new Error(genericErrors.fetchError);
    });
    return result;
  }

  result = await axios.get(params.baseUrl + params.route, {
    headers: request.callHeaders
  });
  return result;
};

const createChargeAsync = async request => {
  const params = getConnectionParams(request, "createCharge");
  let result = {};

  if (request.callType == "production" || request.callType == "tests") {
    result = await axios.post(params.baseUrl + params.route, request.body, {
      headers: request.callHeaders
    }).catch(e => {
      console.error(e);
      throw new Error(genericErrors.fetchError);
    });
    return result;
  }

  result = await axios.get(params.baseUrl + params.route, {
    headers: request.callHeaders
  }).catch(e => {
    console.error(e);
    throw new Error(genericErrors.fetchError);
  });
  return result;
};

const getRefundAsync = async request => {
  const params = getConnectionParams(request, "refund");
  let result = {};
  result[request.id] = null;

  if (request.id) {
    result = await axios.get(params.baseUrl + params.route + `/${request.id}`, {
      headers: request.callHeaders
    }).catch(e => {
      console.error(e);
      throw new Error(genericErrors.fetchError);
    });
    return result;
  }

  result = await axios.get(params.baseUrl + params.route, {
    headers: request.callHeaders
  });
  return result;
};

const createRefundAsync = async request => {
  const params = getConnectionParams(request, "createRefund");
  let result = {};

  if (request.callType == "production" || request.callType == "tests") {
    result = await axios.post(params.baseUrl + params.route, request.body, {
      headers: request.callHeaders
    }).catch(e => {
      console.error(e);
      throw new Error(genericErrors.fetchError);
    });
    return result;
  }

  result = await axios.get(params.baseUrl + params.route, {
    headers: request.callHeaders
  }).catch(e => {
    console.error(e);
    throw new Error(genericErrors.fetchError);
  });
  return result;
};

const getCustomerAsync = async request => {
  const params = getConnectionParams(request, "customer");
  let result = {};
  result[request.id] = null;

  if (request.id) {
    result = await axios.get(params.baseUrl + params.route + `/${request.id}`, {
      headers: request.callHeaders
    }).catch(e => {
      console.error(e);
      throw new Error(genericErrors.fetchError);
    });
    return result;
  }

  result = await axios.get(params.baseUrl + params.route, {
    headers: request.callHeaders
  });
  return result;
};

const createCustomerAsync = async request => {
  const params = getConnectionParams(request, "createCustomer");
  let result = {};

  if (request.callType == "production" || request.callType == "tests") {
    result = await axios.post(params.baseUrl + params.route, request.body, {
      headers: request.callHeaders
    }).catch(e => {
      console.error(e);
      throw new Error(genericErrors.fetchError);
    });
    return result;
  }

  result = await axios.get(params.baseUrl + params.route, {
    headers: request.callHeaders
  }).catch(e => {
    console.error(e);
    throw new Error(genericErrors.fetchError);
  });
  return result;
};

const getTransactionAsync = async request => {
  const params = getConnectionParams(request, "transaction");
  let result = {};
  result[request.id] = null;

  if (request.id) {
    result = await axios.get(params.baseUrl + params.route + `/${request.id}`, {
      headers: request.callHeaders
    }).catch(e => {
      console.error(e);
      throw new Error(genericErrors.fetchError);
    });
    return result;
  }

  result = await axios.get(params.baseUrl + params.route, {
    headers: request.callHeaders
  });
  return result;
};

const createPaymentAsync = async request => {
  const params = getConnectionParams(request, "payment");
  let result = {};

  if (request.callType == "production" || request.callType == "tests") {
    result = await axios.post(params.baseUrl + params.route, request.body, {
      headers: request.callHeaders
    }).catch(e => {
      console.error(e);
      throw new Error(genericErrors.fetchError);
    });
    return result;
  }

  result = await axios.get(params.baseUrl + params.route, {
    headers: request.callHeaders
  }).catch(e => {
    console.error(e);
    throw new Error(genericErrors.fetchError);
  });
  return result;
};

export { getChargeAsync, createChargeAsync, getRefundAsync, createRefundAsync, getCustomerAsync, createCustomerAsync, getTransactionAsync, createPaymentAsync };