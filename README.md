# Clothing E-Commerce Website <!-- omit in toc -->

## Table of Contents <!-- omit in toc -->

- [Description](#description)
- [Technologies](#technologies)
- [Packages](#packages)
- [Install Instructions](#install-instructions)
  - [Stripe API](#stripe-api)
- [Roadmap](#roadmap)
  - [Features](#features)
  - [Optimisations](#optimisations)
  - [UI](#ui)

## Description

A clothing e-commerce website that allows users to create an account or login with a Google account, add products to their cart and checkout using Stripe API. Client-side created using React, SASS. Server-side created using Firebase for authentication and databse storage.

## Technologies

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFF?style=for-the-badge&logo=firebase&logoColor=orange)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Stripe API](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)



## Packages

<table>
    <tr><th>Name</th><th>Description</th></tr>
    <tr><td>@reduxjs/toolkit</td><td>Used for state management to manage the state of the user, products in the cart and the categories and products.</td></tr>
    <tr><td>@stripe/react-stripe-js</td><td>React Stripe.js is a thin wrapper around Stripe Elements. It allows you to add Elements to any React app. Used to add Card Element for payment form and also the hook to safely pass payment information collected by the Card Element to the Stripe API.</td></tr>
    <tr><td>@stripe/stripe-js</td><td>Used to return a promise that resolves with a newly created Stripe Object. Allows connection of Stripe API.</td></tr>
    <tr><td>dotenv</td><td>Used to load Stripe API keys from .env file.</td></tr>
    <tr><td>firebase</td><td>Used for user authentication via email and password and also Google sign in. Firestore database used to store product information and user information.</td></tr>
    <tr><td>react</td><td>JavaScript library for building user interfaces</td></tr>
    <tr><td>react-dom</td><td>Package that provides DOM-specific methods for React</td></tr>
    <tr><td>react-redux</td><td>Used for state management to manage the state of the user, products in the cart and the categories and products. Specifically used for creating selectors of returning cart values and returning products to display.</td></tr>
    <tr><td>react-router-dom</td><td>Enables client side routing navigation.</td></tr>
    <tr><td>redux-logger</td><td>Redux middleware used in development to debug and track state using redux.</td></tr>
    <tr><td>redux-persist</td><td>Used with redux to persist and rehydrate a redux store. Will persist cart products, user state and what products have been fetched.</td></tr>
    <tr><td>reselect</td><td>Used with redux to create memoized selectors.</td></tr>
    <tr><td>stripe</td><td>Provides access to Stripe API to server-side code. Used specicially for netlify functions to connect to Stripe API using API key and also creating the payment object that is sent to Stripe.</td></tr>
</table>

## Install Instructions

To run locally on machine (assuming up to date Node Package Manager), first install dependencies:

``npm run install``

To run locally in browser:

``npm run start``

### Stripe API

You will require your own instance of Stripe API for the code to function properly. Follow instructions below to run project locally:

- Create account at [Stripe](https://stripe.com/gb)
- Create .env file and create two variables named:
  - REACT_APP_STRIPE_PUBLISHABLE_KEY
  - STRIPE_SECRET_KEY
- Copy Publishable key from Stripe website and insert into REACT_APP_STRIPE_PUBLISHABLE_KEY
- Copy Secret key from Stripe website and insert into STRIPE_SECRET_KEY
- You should now be good to go if not feel free to contact me and I can try to help!

## Roadmap

### Features

- [ ] Confirmation page after checking out
- [ ] Profile page allowing user to edit profile details
- [ ] Add ability to pay via different options
- [ ] Add a clear cart button

### Optimisations

- [x] Have title of website point to current page
- [x] Redirect after sign up/login to account
- [ ] Allow users to delete their account from database

### UI

- [ ] Mobile Stylings
- [ ] Colour Themes
