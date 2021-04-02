## Streamloots Challenge

Create a Single Page Application to display a list of cards, users should be able to perform following actions:

### Delete
User should be able to remove a card from the list
<img src="https://i.gyazo.com/9afd4ce8ff8c24607c0ca0f02fdf302e.gif" width="680"/>

### Edit
User should be able to edit a card in a different page. Image and name are required.
<img src="https://i.gyazo.com/be27f30b86ae5b9b40f0f83cc0c7fe5d.gif" width="680"/>

### Search
User should be able to search cards by name
<img src="https://i.gyazo.com/73d3766383155e26aeef7bbbb7607fe8.gif" width="680"/>

### Navigate
User should be able to navigate across different pages
<img src="https://i.gyazo.com/79e0854cfac5f67cbf454b9e601aa4bb.gif" width="680"/>

## Setup & Run

To execute the project you will need to run following commands:

1. Clone the repository
`git clone https://github.com/guilean/cards.git`
2. Change to cards path `cd cards`
3. Install node dependencies `yarn install`

### Server

1. Change to server path `cd server`
2. Install server dependencies `yarn install`
3. Run server `yarn start` (runs on port 4000)

### Client

1. Run start script to launch the application in local `yarn start`

Once the above commands are executed, you will be able to interact with the application.

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

