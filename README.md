## Express app boilerplate with passportjs-jwt authentication and role-based authorization

Use this boilerplate for your express project that needs passportjs-jwt authentication and Typescript. This boilerplate also comes with role-based authorization.

Originally forked from from [express-jwt-authentication-starter](https://github.com/zachgoll/express-jwt-authentication-starter).

Project structure inspired by [Bulletproof node.js project architecture](https://github.com/santiq/bulletproof-nodejs).

## How to use this Repo

This starter is especially suitable for express.js backend that is connected to SPA frontend (React, Angular or similar). More information about the usage of passport.js can be found from the official documents: [passport.js](http://www.passportjs.org/packages/passport-jwt/).

You will need to start the Mongo DB database using the `mongod` process.  You can run this process persistently in the background, but you could also just type `mongod` in your terminal.

Next, you will need to generate a public/private keypair.  The `.gitignore` automatically ignores the private key. To generate the keypair run
```
npm run genKeypair
```

## Quickstart

Start the Express server in dev mode (http://localhost:3000)
```
npm run dev
```

Build the project for production use
```
npm run build
```

Run the production build
```
npm start
```


## Authentication flow

You can test the authentication with HTTP client of your preference, I use [Postman](https://www.postman.com/). The app currently has four routes: /users/register, /users/login, /users/protected and /users/protected-admin. You should be able to perform the following authentication flow:

1. POST /users/register with object
```
{
    "username": "your-username", 
    "password": "your-password" 
}
```
as the request body.

2. POST /users/login with the same object in the body as in the registration. You should get a response that contains field "token". Copy the token string starting with "Bearer..". Copy the token without the quotation marks.

3. GET /users/protected with your token attached to the Authorization header. You should get a response message "You are succesfully authenticated for this route!"

4. Get /users/protected-admin should give you a response "Unauthorized (role)". To access this route you need to create an admin account by adding "role": ["admin"] in phase 1.

If you got successfully to phase 3, the app starter is working correctly and you can start building your app!


