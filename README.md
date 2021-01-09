# Address Book

## Summary

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Implementation details

### General

Application is implemented using functional components approach, with React Hooks and Higher Order Components.

Routing is controlled by [React Router](https://reactrouter.com) with a designated **AppRouter** component.

For UI and styling was used [Bulma CSS](https://bulma.io) framework and **SCSS** preprocessor. One component also uses [styled-components](https://styled-components.com).

Network calls are made with **axios**, with all the logic is placed into `services\api.js`, this allows to quickly swap the data provider with another data fetching service and data transformer, if that is needed.

### State Management

Global state management is controlled by [Redux Library](https://redux.js.org).

Application **store** is groupped into several categories, i.e. **reducers**, **selectors**, **actions** etc.

There are two middlewares added to the store:

- logger
- redux thunk

### Components

Where applicable, component is consist of two parts:

- container
- data manager

So, the component looks smth like:

```language
components\
  user\
    UserList\
      index.js
      UserList.js
```

The **container** does not interact with **redux** on its own, and instead it simply consumes the **props** coming from the **data manager**.

This approach allows significantly simplify testing process by rendering the **container** from a test suit and passing there props manually.

Also, this allows to eliminate any **"props chaining"**, so, only the component what needs a particular data from the global state, is getting it from the **store** on its own (using **data manager**), and not from the parent component.

If component does not have any interaction with the **store**, it exist in a **container** only, i.e.

```language
components\
  user\
    UserListItem.js
```

Components are organized into several categories, like **common**, **hoc** and business logic related, with more detailed nesting inside, like `user\UserDetails`, `user\UserList` etc.

Layout is extracted into its own directory in the **src** tree, as well as **pages**, since those are rather **presentation** related entites than components, however, functional wise they all are functional components.

### Testing

Test suits are created using [Jest Framework](https://jestjs.io), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Mock Service Worker](https://mswjs.io/docs/).

Network requests are mocked using **Mock Service Worker**.

**Mock Service Worker** was chosen because it is an API mocking library that uses Service Worker API to intercept actual requests.

It leverages a standardized Service Worker API that is designed to intercept requests on the network level, making the mocking completely seamless. Not only this guarantees an identical application's behavior with and without mocks, but also does not require any changes to the application's code for the sake of mocking.

Tests are placed on the same level with the components (or files being tested), which allows simplify **import** statements, and on a first glance see which files have tests and which do not have them yet.

## Available Scripts

**Note: Please make sure that you have `yarn` installed prior to running any scipts.**

A very first step is dependecies installation. For that, in the project directory (in your terminal), please run:

### `yarn`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn lint`

This command executes `eslint` validation of the project files.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
