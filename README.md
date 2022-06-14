# Cosmic-Hunt

_Cosmic-Hunt_ is a clone of [Product Hunt](https://www.producthunt.com/ "Product hunt's Homepage"). Access to Cosmic-Hunt's MVP can be found [here](https://github.com/suwanshree/cosmic-hunt/wiki/Feature-List "Cosmic-Hunt's Wiki feature list").

This is a website where the lastest interstellar products and technologies can be found and a place for productive discussions about them.

## Index

---

| [MVP Feature List](https://github.com/suwanshree/cosmic-hunt/wiki/Feature-List "Cosmic-Hunt's feature list") | [Database Schema](https://github.com/suwanshree/cosmic-hunt/wiki/Database-Schema "Cosmic-Hunt's database schema") | [API Documentation](https://github.com/suwanshree/cosmic-hunt/wiki/API-Documentation "Cosmic-Hunt's API documentation") | [Frontend Routes](https://github.com/suwanshree/cosmic-hunt/wiki/Frontend-Routes "Cosmic-Hunt's frontend routes") |

## Technologies Used

---

![Technologies](technologiesUsed.png)

## Getting started

---

1.  Clone this repo.

    -        `https://github.com/suwanshree/cosmic-hunt.git`

2.  Install dependencies from the root directory.

    -        `npm install`

3.  Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL.

    -        CREATE USER <name> WITH CREATEDB PASSWORD <'password'>

4.  Create a .env file in the backend directory based on the .env.example found within the respective directory.

5.  Enter your username and password information into your .env fiel along with your desired database name, a secured combination of characters for your JWT_SECRET, and your desired PORT (preferably 5000).

6.  Add the following proxy to your package.json file within your frontend directory, replacting or keeping the 5000 port to match your PORT configuration found in your .env file.

    -       "proxy": "http://localhost:5000"

7.  Create Database, Migrate, and Seed models.

    -       npx dotenv sequelize db:create

    -       npx dotenv sequelize db:migrate

    -       npx dotenv sequelize db:seed:all

8.  Start the services in the backend directory.

    -       npm start

9.  Start the services in the frontend directory, which should open the project in your default browser. If not, navigate to [Frontend Server](http://localhost:3000).

    -       npm start

10. You can use the Demo user or create an account to begin using _Cosmic-Hunt_.

## Features

---

Logged in users can perform the following actions.

    - Add/View/Edit/Delete Products

    - Add/View/Edit/Delete Reviews
