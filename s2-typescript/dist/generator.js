"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generar = void 0;
const json_schema_to_typescript_1 = require("json-schema-to-typescript");
const fs = require("fs");
// compile from file
function Generar() {
    (0, json_schema_to_typescript_1.compileFromFile)('./s2-json-schema/schemas/Commodity.schema.json')
        .then(ts => fs.writeFileSync('Commodity.d.ts', ts))
        .then(() => console.log("Convertido"));
}
exports.Generar = Generar;
