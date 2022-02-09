import { strings } from '@angular-devkit/core';
import { apply, template, Rule, SchematicContext, Tree, url, mergeWith, Source } from '@angular-devkit/schematics';
import { Schema } from './models/schema.model';

export function createComponent(_options: Schema): Rule {

  console.log('My component with name ' + _options.name + ' will be created');

  return (_: Tree, _context: SchematicContext) => {

    const sourceTemplates: Source = url('./files/');    

    const sourceParametrizedTemplaces = apply(
      sourceTemplates, [
        template({
          ..._options,
          ...strings
        })
      ]
    );

    return mergeWith(sourceParametrizedTemplaces);
  };

}
