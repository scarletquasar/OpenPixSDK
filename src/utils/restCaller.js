import { sources } from "../sources/sources.js";
import { genericErrors } from "../models/errors/genericErrors.js";
import genericRequest from "../models/extensions/GenericRequest.js";


const getConnectionParams = (request, routeName) => {
    const baseUrl = sources[request.callType]["baseUrl"];
    const route = sources[request.callType][routeName];
    return {baseUrl, route};
}

const getCharge = async (request) => {
    const params = getConnectionParams(request, "charge");
    let result = {};

    result[request.id] = null;

    if(request.id) {
        result = await genericRequest(params.baseUrl + params.route + `/${request.id}`, 'GET', {
            headers: request.callHeaders
        })
        .catch(e => {
            console.error(e);
            throw new Error(genericErrors.fetchError);
        })
        return result;
    }
    
    result = await genericRequest(params.baseUrl + params.route, 'GET', {
        headers: request.callHeaders
    });
    return result;
};

const createCharge = async (request) => {
    const params = getConnectionParams(request, "createCharge");
    let result = {};

    if(request.callType == "production" || request.callType == "tests") {
        result = await genericRequest(params.baseUrl + params.route, 'POST', {
            headers: request.callHeaders
        }, request.body)
        .catch(e => {
            console.error(e);
            throw new Error(genericErrors.fetchError);
        });
    
        return result;
    }

    result = await genericRequest(params.baseUrl + params.route, 'GET', {
            headers: request.callHeaders
    })
    .catch(e => {
        console.error(e);
        throw new Error(genericErrors.fetchError);
    });
    
    return result;
}

const getRefund = async (request) => {
    const params = getConnectionParams(request, "refund");
    let result = {};

    result[request.id] = null;

    if(request.id) {
        result = await genericRequest(params.baseUrl + params.route + `/${request.id}`, 'GET', {
            headers: request.callHeaders
        })
        .catch(e => {
            console.error(e);
            throw new Error(genericErrors.fetchError);
        })
        return result;
    }
    
    result = await genericRequest(params.baseUrl + params.route, 'GET', {
        headers: request.callHeaders
    });
    return result;
}

const createRefund = async (request) => {
    const params = getConnectionParams(request, "createRefund");
    let result = {};

    if(request.callType == "production" || request.callType == "tests") {
        result = await genericRequest(params.baseUrl + params.route, 'POST', 
        {
            headers: request.callHeaders
            }, request.body)
        .catch(e => {
            console.error(e);
            throw new Error(genericErrors.fetchError);
        });
    
        return result;
    }

    result = await genericRequest(params.baseUrl + params.route, 'GET', {
            headers: request.callHeaders
    })
    .catch(e => {
        console.error(e);
        throw new Error(genericErrors.fetchError);
    });
    
    return result;
}

const getCustomer = async (request) => {
    const params = getConnectionParams(request, "customer");
    let result = {};

    result[request.id] = null;

    if(request.id) {
        result = await genericRequest(params.baseUrl + params.route + `/${request.id}`, 'GET', {
            headers: request.callHeaders
        })
        .catch(e => {
            console.error(e);
            throw new Error(genericErrors.fetchError);
        })
        return result;
    }
    
    result = await genericRequest(params.baseUrl + params.route, 'GET', {
        headers: request.callHeaders
    });
    return result;
}

const createCustomer = async (request) => {
    const params = getConnectionParams(request, "createCustomer");
    let result = {};

    if(request.callType == "production" || request.callType == "tests") {
        result = await genericRequest(params.baseUrl + params.route, 'POST', 
        {
            headers: request.callHeaders
            }, request.body)
        .catch(e => {
            console.error(e);
            throw new Error(genericErrors.fetchError);
        });
    
        return result;
    }

    result = await genericRequest(params.baseUrl + params.route, 'GET', {
            headers: request.callHeaders
    })
    .catch(e => {
        console.error(e);
        throw new Error(genericErrors.fetchError);
    });
    
    return result;
}

const getTransaction = async (request) => {
    const params = getConnectionParams(request, "transaction");
    let result = {};

    result[request.id] = null;

    if(request.id) {
        result = await genericRequest(params.baseUrl + params.route + `/${request.id}`, 'GET', {
            headers: request.callHeaders
        })
        .catch(e => {
            console.error(e);
            throw new Error(genericErrors.fetchError);
        })
        return result;
    }
    
    result = await genericRequest(params.baseUrl + params.route, 'GET', {
        headers: request.callHeaders
    });
    return result;
}

const createPayment = async (request) => {
    const params = getConnectionParams(request, "payment");
    let result = {};

    if(request.callType == "production" || request.callType == "tests") {
        result = await genericRequest(params.baseUrl + params.route, 'POST',
        {
            headers: request.callHeaders
            }, request.body)
        .catch(e => {
            console.error(e);
            throw new Error(genericErrors.fetchError);
        });
    
        return result;
    }

    result = await genericRequest(params.baseUrl + params.route, 'GET', {
            headers: request.callHeaders
    })
    .catch(e => {
        console.error(e);
        throw new Error(genericErrors.fetchError);
    });
    
    return result;
}

const confirmPayment = async (request) => {
    const params = getConnectionParams(request, "confirmPayment");
    let result = {};

    if(request.callType == "production" || request.callType == "tests") {
        result = await genericRequest(params.baseUrl + params.route, 
        {
            headers: request.callHeaders
            }, request.body)
        .catch(e => {
            console.error(e);
            throw new Error(genericErrors.fetchError);
        });
    
        return result;
    }

    result = await genericRequest(params.baseUrl + params.route, 'GET', {
            headers: request.callHeaders
    })
    .catch(e => {
        console.error(e);
        throw new Error(genericErrors.fetchError);
    });
    
    return result;
}

const getPixQrCode = async (request) => {
    const params = getConnectionParams(request, "pixQrCode");
    let result = {};

    result[request.id] = null;

    if(request.id) {
        result = await genericRequest(params.baseUrl + params.route + `/${request.id}`, 'GET', {
            headers: request.callHeaders
        })
        .catch(e => {
            console.error(e);
            throw new Error(genericErrors.fetchError);
        })
        return result;
    }
    
    result = await genericRequest(params.baseUrl + params.route, 'GET', {
        headers: request.callHeaders
    });
    return result;
}

export { 
    getCharge,
    createCharge,
    getRefund,
    createRefund,
    getCustomer,
    createCustomer,
    getTransaction,
    createPayment,
    confirmPayment,
    getPixQrCode
}