# Electron React Bootstrap

This repository contains a Bootstrap for Electron with React.

It uses Wepback and Babel under the hood.

To use this bootstrap project just clone the git repository.

## Install (clone)

```
git clone https://github.com/giftkugel/electron-react-bootstrap.git
cd electron-react-bootstrap
npm i
```

HINT: Don't forget to change the name of your application in the package.json.

### The following NPM commands are useable after installation.

The command should be OS indepentent. You can use them on Linux, MacOS or Windows.

**Bundle and serve files (will start Electron with you Application inside)**
```bash
npm start
```

**Clean the distribution and build directories**
```bash
npm run clean:all
```

**Clean all directories**
```bash
npm run clean:all
```

**Clean the distribution directory**
```bash
npm run clean:dist
```

**Clean the build directory**
```bash
npm run clean:build
```

**Create a bundle in the build directory**
```bash
npm run bundle
```

**Create a bundle in the build directory and watch for file changes**
```bash
npm run bundle:watch
```

**Serve the bundled files**
```bash
npm run serve
```

**Create all distributions**
```bash
npm run dist
```

**Create Windows distribution**
```bash
npm run dist:win
```

**Create MacOs distribution**
```bash
npm run dist:mac
```

## Directory structure

```bash
├── src (Your source files)
│   ├── components (Your React components)
│   │   ├── **/*.css
│   │   ├── **/*.jsx
│   ├── normalize.css
│   ├── main.js (Main JS file for Electron)
├── dist (Distribution files)
├── build (Bundle files)
├── node_modules
├── skeleton (HTML5 skeleton)
├── jsconfig.json
├── README.md
├── package.json
├── package-lock.json
├── webpack.config.js
└── .gitignore
```