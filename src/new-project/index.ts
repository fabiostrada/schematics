import { externalSchematic, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function newProject(_options: any): Rule {

  let name: string = _options.name;
  console.log('The Name of project will be : ' + name);

  return (_: Tree, _context: SchematicContext) => {
      return externalSchematic('@schematics/angular', 'ng-new', {
        name,
        version: '9.0.0',
        directory: name,
        routing: true,
        style: 'scss',
        inlineStyle: false,
        inlineTemplate: false
      });
  };
}
