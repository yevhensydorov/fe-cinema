# Movies search project powered by React and Golang server

Small learning project which helped me to to get knowledge in building Golang server and using Redux toolkit.<br />
Technologies that were using in this project are **React**, [Redux Toolkit](https://redux-toolkit.js.org/), **Golang**.<br />
Golang Packages list: **gorilla/mux**, **godotenv**

# IMDB 3rd party API

Project is using IMDB API data. Prior to run it you need to get an API key from [IMDB API](http://www.omdbapi.com/#usage)

# ENV parameters

To run this project locally you need to create .env file in the root of the project.<br/>
`touch .env`

**Example of .env file setup**

```javascript
REACT_APP_LOCAL_API_URL=http://localhost:8080/


API_KEY=YOUR_API_KEY
API_URL=http://www.omdbapi.com/?apikey=
SERVER_PORT=:8080
```

# Running backend server in Docker

This project use a Dockerfile to run the golang so we don't need to install Go locally. Make sure that the Docker is running on your machine, though.

`docker build --tag be-cinema .`<br />
`docker run -p 8080:8080 --env-file .env be-cinema:latest`

# Running front end

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn`

Install all dependencies needed to run the front-end

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
