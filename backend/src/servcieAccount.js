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
