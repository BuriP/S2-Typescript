"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generar = void 0;
var json_schema_to_typescript_1 = require("json-schema-to-typescript");
var fs = require("fs");
// Specify the path to your JSON schema file
var path = 'generator/messages'; // Adjust the path as needed
// Function to generate TypeScript types for each JSON schema file
function generateTypesForSchemas(folderPath) {
    return __awaiter(this, void 0, void 0, function () {
        var files, schemaFiles, aja, _i, schemaFiles_1, file, schemaFilePath, newFile, ts, outputFilePath, error_1, message, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 8, , 9]);
                    return [4 /*yield*/, fs.promises.readdir(folderPath)];
                case 1:
                    files = _a.sent();
                    schemaFiles = files.filter(function (file) { return file.endsWith('.schema.json'); });
                    aja = false;
                    _i = 0, schemaFiles_1 = schemaFiles;
                    _a.label = 2;
                case 2:
                    if (!(_i < schemaFiles_1.length)) return [3 /*break*/, 7];
                    file = schemaFiles_1[_i];
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    schemaFilePath = "".concat(folderPath, "/").concat(file);
                    newFile = "".concat(folderPath, "/generated/").concat(file);
                    return [4 /*yield*/, (0, json_schema_to_typescript_1.compileFromFile)(schemaFilePath, { 'cwd': path })];
                case 4:
                    ts = _a.sent();
                    outputFilePath = "".concat(newFile.replace('.schema.json', '.d.ts'));
                    fs.writeFileSync(outputFilePath, ts);
                    console.log("TypeScript types generated for ".concat(file));
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    message = "Unable to create " + file;
                    console.log('\x1b[31m' + message + '\x1b[0m');
                    if (!aja) {
                        console.log(error_1);
                        aja = true;
                    }
                    return [3 /*break*/, 6];
                case 6:
                    _i++;
                    return [3 /*break*/, 2];
                case 7:
                    console.log('All TypeScript types generated successfully!');
                    return [3 /*break*/, 9];
                case 8:
                    error_2 = _a.sent();
                    console.error('Error generating TypeScript types:', error_2);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
// Compile the schema to TypeScript
function Generar() {
    generateTypesForSchemas(path);
}
exports.Generar = Generar;
