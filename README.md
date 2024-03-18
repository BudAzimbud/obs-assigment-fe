```javascript
project-root/
│
├── src/
│   ├── assets/                   # For static assets like images, fonts, etc.
│   ├── components/               # Reusable UI components
│   ├── hooks/                    # Custom React hooks
│   ├── redux/                    # Redux-related files (actions, reducers, store)
│   ├── helper/                   # Helper functions or utilities
│   ├── App.css                   # Main CSS file for the application
│   ├── App.jsx                   # Main component file (or entry point)
│   ├── App.test.js               # Tests for the main component
│   ├── ErrorBoundary.jsx         # Error boundary component
│   ├── index.css                 # Main CSS file for index.js
│   ├── index.js                  # Entry point of the application
│   ├── reportWebVitals.js        # File for reporting web vitals (if using CRA)
│   └── setupTests.js             # Configuration/setup for testing (if using CRA)
│
└── other-project-files/ ```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Creating Custom Components

When creating custom components for this project, please follow these guidelines:

### 1. Modularity:
   - Keep your components modular, focusing on single responsibilities.
   - Avoid mixing presentation logic with data management.

### 2. Reusability:
   - Aim for reusable components that can be utilized across your application.
   - Abstract common patterns into higher-level components for better reusability.

### 3. Configurability via Props:
   - Design components to be configurable through props.
   - Document the available props and their expected values.

### 4. Clear Naming:
   - Use descriptive and intuitive names for your components.
   - Choose names that accurately reflect their purpose and functionality.

### 5. Consistent Styling:
   - Maintain consistent styling conventions across components.
   - Utilize CSS-in-JS solutions or Material-UI's theming system for styling.

### 6. Accessibility:
   - Ensure components are accessible to all users, including those using assistive technologies.
   - Use semantic HTML elements and provide appropriate ARIA attributes.

### 7. Documentation:
   - Provide comprehensive documentation for each component, including usage examples and prop documentation.

### 8. Testing:
   - Write tests to verify component behavior and functionality.
   - Test user interactions, prop variations, and edge cases.

Follow these guidelines to create high-quality, reusable components that enhance the maintainability and scalability of your application.

### Example:

Suppose you want to create a custom button component. Here's how you can implement it:

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

function CustomButton({ label, onClick }) {
  return (
    <Button variant="contained" onClick={onClick}>
      {label}
    </Button>
  );
}

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CustomButton;```


## Redux Development Guidelines

When developing Redux-related functionality for this project, please adhere to the following guidelines:

### 1. Modular Store Structure:
   - Organize your Redux store structure in a modular way, grouping related actions, reducers, and selectors into separate modules or slices.

### 2. Single Source of Truth:
   - Utilize Redux as the single source of truth for managing application state.
   - Avoid duplicating state management logic outside of Redux.

### 3. Actions and Action Types:
   - Define action types as constants to ensure consistency and avoid typos.
   - Create actions as pure functions that return action objects with a `type` property and optional payload.

### 4. Reducers:
   - Write reducers as pure functions that specify how the application's state changes in response to actions.
   - Keep reducers pure by avoiding side effects or mutations of state.

### 5. Immutable State Updates:
   - Ensure immutability when updating state within reducers to prevent unexpected behavior.
   - Use immutability helpers like `immer` or spread operators (`...`) to produce new state objects.

### 6. Selectors:
   - Implement selectors to encapsulate the logic for deriving data from the Redux store.
   - Memoize selectors using libraries like `reselect` to optimize performance.

### 7. Asynchronous Actions:
   - Handle asynchronous logic such as API requests using middleware like `redux-thunk` or `redux-saga`.
   - Keep asynchronous actions separate from synchronous actions for clarity.

### 8. Documentation:
   - Document the purpose, usage, and expected behavior of each action, reducer, selector, and middleware.
   - Include examples of how to use Redux-related functionality within your project.

### 9. Testing:
   - Write unit tests for actions, reducers, selectors, and middleware to ensure their correctness.
   - Use mocking libraries like `redux-mock-store` for testing Redux-related functionality.

Follow these guidelines to maintain a consistent and manageable Redux architecture within your project.

### Example:

Suppose you want to create a Redux slice for managing user authentication state. Here's how you can implement it:

```javascript
// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { cities } from '../../helper/const';

const initialState = {
  cities
};

export const citiesSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addCity: (state, action) => {
      if (
        action.payload.data &&
        state.cities.find((item) => item === action.payload.data) === undefined
      ) {
        state.cities.push(action.payload.data);
      }
    }
  }
});

export const { addCity } = citiesSlice.actions;

export default citiesSlice.reducer;```


## Custom Hooks Development Guidelines

When developing custom hooks for this project, please adhere to the following guidelines:

### 1. Modularity:
   - Keep your custom hooks modular and focused on specific concerns or functionality.
   - Aim for single-responsibility hooks that encapsulate reusable logic.

### 2. Descriptive Naming:
   - Use descriptive and intuitive names for your custom hooks to convey their purpose effectively.
   - Prefix hook names with "use" to follow React's naming convention (e.g., `useCustomHook`).

### 3. Reusability:
   - Design custom hooks to be reusable across different components and scenarios.
   - Extract common logic from components into hooks to promote code reuse.

### 4. Dependency Injection:
   - Pass dependencies as arguments to your custom hooks to make them more flexible and testable.
   - Avoid relying on global variables or context within your hooks to enhance portability.

### 5. Hook Composition:
   - Compose hooks together to build more complex functionality.
   - Leverage existing hooks within your custom hooks to combine multiple behaviors.

### 6. State Management:
   - Utilize React's built-in state management (useState) within custom hooks when appropriate.
   - Encapsulate stateful logic within custom hooks to keep components lean and focused.

### 7. Side Effects:
   - Handle side effects within custom hooks using useEffect.
   - Keep side-effect logic contained within the hook to maintain encapsulation and predictability.

### 8. Documentation:
   - Provide clear and comprehensive documentation for each custom hook, including usage examples and any dependencies or side effects.
   - Document the purpose, input parameters, return values, and usage instructions for each hook.

### 9. Testing:
   - Write unit tests for your custom hooks to ensure their correctness and functionality.
   - Test various input scenarios and edge cases to verify behavior under different conditions.

Follow these guidelines to create high-quality, reusable custom hooks that enhance the maintainability and scalability of your React application.

### Example:

Suppose you want to create a custom hook for managing form state. Here's how you can implement it:

```javascript
import { useDebouncedCallback } from 'use-debounce';

export const useDebounce = (duration = 500) => {
  const debounced = useDebouncedCallback((action) => {
    action();
  }, duration);

  return debounced;
};


