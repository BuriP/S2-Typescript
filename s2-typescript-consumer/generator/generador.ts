import { compileFromFile } from 'json-schema-to-typescript';
import * as fs from 'fs';


// Specify the path to your JSON schema file
const path: string = 'generator/schemas'; // Adjust the path as needed

// Function to generate TypeScript types for each JSON schema file
async function generateTypesForSchemas(folderPath : string) {
  try {
    // Read the files from the folder
    const files = await fs.promises.readdir(folderPath);

    // Filter out JSON schema files
    const schemaFiles = files.filter(file => file.endsWith('.schema.json'));
    let aja : boolean = false;

    // Generate TypeScript types for each schema file
    for (const file of schemaFiles) {
      try{
      const schemaFilePath = `${folderPath}/${file}`;
      const newFile = `${folderPath}/generated/${file}`;
      const ts = await compileFromFile(schemaFilePath, {'cwd':path});
      const outputFilePath = `${newFile.replace('.schema.json', '.ts')}`;
      fs.writeFileSync(outputFilePath, ts);
      console.log(`TypeScript types generated for ${file}`);
      }catch(error){
        const message: string = "Unable to create " + file;
        console.log('\x1b[31m' + message + '\x1b[0m');
        if(!aja){
          console.log(error);
          aja = true;
        }
      }
    }

    console.log('All TypeScript types generated successfully!');
  } catch (error) {
    console.error('Error generating TypeScript types:', error);
  }
}
// Compile the schema to TypeScript
export function Generar() {
  generateTypesForSchemas(path);
}

Generar();