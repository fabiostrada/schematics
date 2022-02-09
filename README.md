# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode

``` npm install -g @angular-devkit/schematics-cli ```

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!

### About project
This project contains three schematics into collections:
1. new-project: it's a schematic to create a new project
2. create-file: it's a schematic to create a file js to print a specific content
3. create-component: it's a schematic to create a empty angular component

### Main commands

1. Create new project ```npm run new_project ``` or ```schematics .:new-project --dryRun=false```
2. Create file ```npm run create_file ``` or ```schematics .:create_file --dryRun=false```
3. Create create component ```npm run create_component ``` or ```schematics .:create_component --dryRun=false```
