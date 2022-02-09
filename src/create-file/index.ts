import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { Schema } from './models/schema.model';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function createFile(_options: Schema): Rule {

  let name_of_file: string = _options.name_of_file;
  console.log('Name of file js: ' + name_of_file);
  let name_to_print: string = _options.name_to_print;
  console.log('Name to print into file js: ' + name_to_print);

  return (tree: Tree, _context: SchematicContext) => {
    tree.create(name_of_file + '.js', `console.log('${name_to_print}')`);
    return tree;
  };

}
