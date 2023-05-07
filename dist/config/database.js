"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const Environment_1 = require("../shared/helpers/Environment");
exports.databaseConfig = {
    mongo: {
        uri: Environment_1.Environment.getEnvString("PORT"),
    },
};
