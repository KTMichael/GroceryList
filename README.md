# Front End Grocery List
## Overview
A single-page app to help users create grocery lists.
## Table of Contents
- [ Description ](https://github.com/KTMichael/GroceryList/edit/main/README.md/#Description)
- [ Demo ](https://github.com/KTMichael/GroceryList/edit/main/README.md/#Demo)
- [ Installation ](https://github.com/KTMichael/GroceryList/edit/main/README.md/#Installation)

## Description
This simple app allows you to add items and their quantity to your list and delete them if need be. The list persists via the database, so your list will repopulate if the app is closed and then reopened.

## Demo

## Installation
  - Everything below takes place in terminal
### Step 1
- Clone repo to local machine
### Step 2
 To install app with npm, run:
  - npm install
### Step 3
To set up the app:
 - Copy dbpassword.example.js and rename it to dbpassword.js
  - Put mySQL password in dbpassword.js
  - Start mySQL, run :
    - mysql.server start
  - Connect to mySQL, run :
    - mysql -u (your username here) -p < db/schema.sql
    - put in password
  - Open mySQL shell :
    - mysql -u (your username here) -p < schema.sql
    - put in password
    - USE gList
### Step 4
To run app with npm, run:
 - npm run react-dev
 - npm start

## Helpful Links
  - [mySQL](https://dev.mysql.com)
