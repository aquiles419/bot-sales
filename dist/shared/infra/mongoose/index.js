"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const database_1 = require("../../../config/database");
const { uri } = database_1.databaseConfig.mongo;
mongoose_1.default.connect(uri, (error) => {
    if (error) {
        console.error(`[Mongoose] ${error}`);
        process.exit(1);
    }
});
