"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Environment_1 = require("@shared/helpers/Environment");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const PORT = Environment_1.Environment.getEnvString("PORT");
if (!Environment_1.Environment.isTestEnvironment()) {
    app.listen(PORT, () => {
        console.info(`🚀 Server is running on port ${PORT}`);
    });
}
