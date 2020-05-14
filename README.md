## How to use this Repo

This repo has two branches:

* master
* final

The `master` branch has a starter template for creating what is in the `final` branch.

You will also need to start the Mongo DB database using the `mongod` process.  I run this process persistently in the background, but you could also just type `mongod` in your terminal (assuming you have Mongo DB installed).

Next, you will need to generate a public/private keypair.  The `.gitignore` automatically ignores the private key.

## Quickstart

```
# Start the Express server in dev mode (http://localhost:3000)
npm run dev
```
