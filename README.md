# ELC LANGUAGE PROJECT BACKEND

### Getting up and running

##### 1. Install Necessary Packages

```bash
npm i
```

##### 2. Create Project Secrets

```bash
# create an environment file called .env.local
# this will hold your database credentials that
# are local to your machine
DATABASE_USER='henryjacobs'
DATABASE_PASSWORD='password'
DATABASE_PORT=3306 # OR the port that your local mysql instance is bound to
```

```bash
# pull the shared project environment variables from
# dotenv.org which will store the variables in a .env file
npx dotenv-vault@latest pull
```

##### 3. Run Development Server

```bash
# Default PORT is 3000
npm run dev
```

##### Additional Commands

```bash
npm run lint        # Run ESLINT
npm run prod        # Run tsc and run a dev server using js
npm run make-pretty # Apply prettier rules and write changes to files
npm test            # Run tests
npm run debug       # Run node in the debugger via dev tools in your browser
```

##### Recommended Installations

For Visual Studio Code users, it's recommended they install the prettier VSCode extension created by prettier.io (it should be the extension with millions of installations and should also be verified). This will allow prettier to make changes on file saves and on code pastes, saving you from having to run `npm run make-pretty` every time a change is made.
