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

    static new(raw) {
        const res = new PixCharge();

        Object.entries(raw).forEach(([key, value]) => {
            res.hasOwnProperty(this[key]) ? res[key] = value : {};
        });

        return res;
    }
}