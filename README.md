# React Portfolio

  ## Table of Contents
  * [About](#about)
  * [Build](#build)
  * [Demo](#demo)
  * [Installation](#installation)

## About

As a web developer I want to create my own portfolio using React, initiall this was meant to be a single page app but as my learning progressed
this turned into a multifacited portfolio 

- When I load the portfolio, then I am presented with a page containing a header, a section for content, and a footer
- When I view the header, then I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
- When I view the navigation titles, then I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the - current section is highlighted
- When I click on a navigation title, then I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted - * this has been changed to routed pages 
- When I load the portfolio the first time, then the About Me title and section are selected by default
- When I am presented with the About Me section, then I see a recent photo or avatar of the developer and a short bio about them
- When I am presented with the Portfolio section, then I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
- When I am presented with the Contact section, then I see a contact form with fields for a name, an email address, and a message
- When I move my cursor out of one of the form fields without entering text, then I receive a notification that this field is required
- When I enter text into the email address field, then I receive a notification if I have entered an invalid email address
- When I am presented with the Resume section, then I see a link to a downloadable resume and a list of the developer’s proficiencies
- When I view the footer, then I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)

## Build

In addition to the standard React install this app also incorporated
- react-router-dom
- react-icons
- styled-components
- swiper
- uuid

Starting with the initial index and App files, I progressivly built my components depending on the section topic. The pages also required some 
components files to be built as well. I had to uninstall and reinstall swiper to a older version and Switch did not working in the react-router-dom but using Router did. In the future I will rework the design from the simple blue and white to something more engaging and softer colors.

## Demo

![demo](./src/assets/gif/portfolio.gif)
![Githubpages-link] https://modsia16.github.io/react-portfolio/
![netlify-link] https://carina-diaz-portfolio.netlify.app/
## Getting Started with Create React App

### Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
