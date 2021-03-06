<div align="center">
<h1>Cards Challenge</h1>

<img
  height="160"
  width="160"
  alt="joker"
  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/274/joker_1f0cf.png"
/>

<p>Single Page Application that allows users to interact with a playground of cards.</p>

</div>

<hr />

### Table of Contents
**[Installation](#setup)**<br>
**[Summary](#summary)**<br>
**[What libraries are used?](#libraries)**<br>
**[How does it look?](#responsive-ui)**<br>
**[Scripts](#scripts)**<br>

## Setup

To execute the project you will need open two terminals and run the following commands:

Clone the repository
```
git clone https://github.com/guilean/cards.git
```
Change to cards path
```
cd cards
```
Install node dependencies
```
yarn install
```

### Server

Change to server path `cd server`
```
cd server
```
Install server dependencies
```
yarn install
```

### Execution

Run dev script to run concurrently server and client locally
```
yarn dev
```

Once the above commands are executed, you will be able to interact with the application. The server runs on port 4000 and the client on 3000.

## Summary

Create a Single Page Application to display a list of cards, users should be able to perform following actions:
- Delete
- Edit
- Search
- Navigate

### Delete
User should be able to remove a card from the list.

<img src="https://i.gyazo.com/9afd4ce8ff8c24607c0ca0f02fdf302e.gif" width="680"/>

### Edit
User should be able to edit a card in a different page. Image and name are required.

<img src="https://i.gyazo.com/be27f30b86ae5b9b40f0f83cc0c7fe5d.gif" width="680"/>

### Search
User should be able to search cards by name.

<img src="https://i.gyazo.com/73d3766383155e26aeef7bbbb7607fe8.gif" width="680"/>

### Navigate
User should be able to navigate across different pages.

<img src="https://i.gyazo.com/79e0854cfac5f67cbf454b9e601aa4bb.gif" width="680"/>

## Libraries

This project has been created using Create React App. This project uses the following dependencies:
- @craco/craco: used to create alias path without ejecting CRA
- @heroicons/react: used to have icons
- @reduxjs/toolkit
- @testing-library: used to test the application in a user-centric way
- react-lazy-load-image-component: used to lazy load images and other components
- axios: used to fetch HTTP in the browser
- lodash/debounce: used to debounce search on type
- react-router-dom: used to split the application in different pages/routes
- redux-persist: used to persist the data in local storage through a middleware
- tailwindcss: used to have utility classes

## Responsive UI

<details><summary>Show</summary>
  
### Desktop

<img src="https://i.imgur.com/hyfIRzn.png"
     alt="Desktop"
     width="800" />

### Mobile

 <img src="https://i.imgur.com/Q5M2nkI.png"
     alt="Desktop"
     width="300"/>
</details>

## Scripts

To run the application in local

`yarn start`

To run tests

`yarn test`

