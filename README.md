# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## How to deploy React App on Github Pages

To deploy a React app on GitHub Pages, you can follow these steps:

### 1. **Install `gh-pages` package**
You'll need the `gh-pages` package to deploy the app easily. In your project directory, run:
```bash
npm install gh-pages --save-dev
```

### 2. **Update `package.json`**
In your `package.json` file, add the following fields:

- **Homepage:** This field specifies the URL where your app will be deployed. Add the following line (replace `your-username` and `your-repository-name` accordingly):
  ```json
  "homepage": "https://your-username.github.io/your-repository-name"
  ```

- **Deploy and Predeploy Scripts:**
  Add these scripts in the `scripts` section of your `package.json`:
  ```json
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
  ```

  Here’s how a typical `scripts` section might look:
  ```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
  ```

### 3. **Push Your Code to GitHub**
If you haven’t already, initialize a git repository and push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/your-repository-name.git
git push -u origin master
```

### 4. **Deploy the React App**
To deploy the app, run:
```bash
npm run deploy
```

This command will create a `build` folder and push the production-ready files to a `gh-pages` branch in your GitHub repository.

### 6. **Enable GitHub Pages**
- Go to your GitHub repository's settings.
- Scroll down to the **GitHub Pages** section.
- In the **Source** section, select the `gh-pages` branch, then click **Save**.
- After a few minutes, your app will be live at `https://your-username.github.io/your-repository-name`.

### 7. **Access Your Deployed App**
Once the deployment is complete, you can access your app by visiting the `homepage` URL you specified earlier, like:
```
https://your-username.github.io/your-repository-name
```

### Troubleshooting
- Make sure that your repository name is correct in the `homepage` field.
- If you encounter issues, you can check the deployment logs using:
  ```bash
  npm run deploy
  ```