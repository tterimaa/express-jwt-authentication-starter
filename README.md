## Express app template with passport.js authentication and typescript

Forked from: https://github.com/zachgoll/express-jwt-authentication-starter

## How to use this Repo

You can use this repo as a starter template for an app that needs passport.js authentication middleware and typescript. More information about the usage of passport.js can be found from the original repository.

You will also need to start the Mongo DB database using the `mongod` process.  You can run this process persistently in the background, but you could also just type `mongod` in your terminal.

Next, you will need to generate a public/private keypair.  The `.gitignore` automatically ignores the private key. To genenerate the keypair run
```
npm run generateKeypair
```

## Quickstart

```
# Start the Express server in dev mode (http://localhost:3000)
npm run dev
```

You can test the app with postman or any other HTTP client of your preference. The app currently has three routes: /users/register, /users/login, /users/protected. You should be able to perform the following authentication flow:
1. POST /users/register with object { "username": "your-username", "password": "your-password" } in the body of the request.
2. POST /users/login with the same object in the body as in the registration. You should get a response that contains field "token". Copy the token string starting with "Bearer..". Copy the token without the quotation marks.
3. GET /users/protected with your token attached to the Authorization header. You should get a response message "You are succesfully authenticated for this route!"
