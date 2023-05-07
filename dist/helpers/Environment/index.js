"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
require("dotenv/config");
class Environment {
    static isTestEnvironment() {
        return Environment.getEnvString("NODE_ENV") === "test";
    }
    static isLocalEnvironment() {
        const NODE_ENV = Environment.getEnvString("NODE_ENV");
        return NODE_ENV === "development" || NODE_ENV === "test";
    }
    static getEnv(name) {
        const variable = process.env[name];
        if (!variable) {
            console.error(`[Environment] Missing ${name} environment variable`);
            process.exit(1);
        }
        return variable;
    }
    static getEnvString(name) {
        const variable = process.env[name];
        if (!variable) {
            console.error(`[Environment] Missing ${name} environment variable`);
            process.exit(1);
        }
        return variable;
    }
    static getEnvNumber(name) {
        const variable = process.env[name];
        if (!variable) {
            console.error(`[Environment] Missing ${name} environment variable`);
            process.exit(1);
        }
        const convertedNumber = Number(variable);
        if (Number.isNaN(convertedNumber)) {
            console.error(`[Environment] Value ${variable} of variable ${name} is not valid as a number`);
            process.exit(1);
        }
        return convertedNumber;
    }
    static getEnvBoolean(name) {
        const variable = process.env[name];
        if (!variable) {
            console.error(`[Environment] Missing ${name} environment variable`);
            process.exit(1);
        }
        if (!variable.match(/true|false/)) {
            console.error(`[Environment] Value ${variable} of variable ${name} is not valid as a boolean`);
            process.exit(1);
        }
        return variable === "true";
    }
}
exports.Environment = Environment;
