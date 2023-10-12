# ELC LANGUAGE PROJECT BACKEND

### Getting up and running

##### 1. Install Necessary Packages

```bash
npm i
```

##### 2. Run Development Server

```bash
npm run dev
```

##### Additional Commands

```bash
npm run lint        # Run ESLINT
npm run build       # Delete ./dist and replace with current build
npm run make-pretty # Apply prettier rules and write changes to files
npm test            # Run tests
```

##### Recommended Installations

For Visual Studio Code users, it's recommended they install the prettier VSCode extension created by prettier.io (it should be the extension with millions of installations and should also be verified). This will allow prettier to make changes on file saves and on code pastes, saving you from having to run `npm run make-pretty` every time a change is made.

### Common 'Shoot Yourself in the Foot' Things

##### 1. Importing functions from different files in TS

When importing functions from different files in TS, instead of using the .ts extension in the import statement, use the .js extension even if the function is saved in a .ts file. For example:

```typescript
// Don't do this!!
import someFunction from './a-function.ts';

// Do this!!
import someFunction from './a-function.js';

someFunction();
```

Even though your function may be saved in a .ts file, just do this and don't worry about why it works! :D
