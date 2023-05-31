To set up your development environment for React on Windows using Visual Studio Code (VS Code), you will need to have Node.js, npm (which comes with Node.js), and VS Code installed on your machine.

Here are the steps:

1. **Install Node.js and npm**

   If you don't have Node.js and npm installed, you can download and install them from the [official Node.js website](https://nodejs.org/). It's generally recommended to install the LTS (Long Term Support) version of Node.js, as it is the most stable and widely used version.

2. **Install Visual Studio Code**

   If you haven't installed VS Code yet, you can download and install it from the [official VS Code website](https://code.visualstudio.com/).

3. **Install Create React App**

   Create React App is a toolchain that helps you create a new single-page React application. You can install it globally on your machine by running this command in your terminal:

   ```
   npx create-react-app my-app
   ```

   `my-app` is the name of the folder for your application. You can replace it with your own.

   This command creates a new directory with the name `my-app`, sets up the new React project in that directory, and installs the necessary dependencies.

4. **Open the project in VS Code**

   You can open the new project in VS Code by first navigating into the project's directory:

   ```
   cd my-app
   ```

   Then open VS Code:

   ```
   code .
   ```

5. **Install React Router Dom**

   To install `react-router-dom`, run the following command in the terminal:

   ```
   npm install react-router-dom
   ```

6. **Start the development server**

   To start the development server, run the following command in the terminal:

   ```
   npm start
   ```

   Now, you should be able to view your new React app in your browser by navigating to `http://localhost:3000`.

From here, you can start creating your React components and import them into `App.js` or any other component file as needed.

Remember, for React components, you should use `className` instead of `class` for adding CSS classes to your elements. This is because `class` is a reserved word in JavaScript.