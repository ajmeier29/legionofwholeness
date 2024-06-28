"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const myServiceAccount = {
    projectId: process.env.SERVICE_ACCOUNT_PROJECT_ID,
    clientEmail: process.env.CLIENT_EMAIL,
    privateKey: (_b = (_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.PRIVATE_KEY) === null || _b === void 0 ? void 0 : _b.replace(/\\n/g, '\n')
};
exports.default = myServiceAccount;
// export default
//   {
//     "type": process.env.SERVICE_ACCOUNT_TYPE,
//     "project_id": process.env.SERVICE_ACCOUNT_PROJECT_ID,
//     "private_key_id": process.env.PROJECT_KEY_ID,
//     "private_key": process?.env?.PRIVATE_KEY?.replace(/\\n/g, '\n'),
//     "client_email": process.env.CLIENT_EMAIL,
//     "client_id": process.env.CLIENT_ID,
//     "auth_uri": process.env.AUTH_URL,
//     "token_uri": process.env.TOKEN_URL,
//     "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_URL,
//     "client_x509_cert_url": process.env.CLIENT_CERT_URL,
//     "universe_domain": process.env.UNIVERSE_DOMAIN,
//   }
