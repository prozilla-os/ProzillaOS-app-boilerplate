<div align="center">
  <br />
  <p>
    <a href="https://os.prozilla.dev/"><img src="https://os.prozilla.dev/assets/logo.svg" height="200" alt="ProzillaOS" /></a>
  </p>
  <p>
    <a href="https://github.com/prozilla-os/ProzillaOS-app-boilerplate"><img alt="Stars" src="https://img.shields.io/github/stars/prozilla-os/ProzillaOS-app-boilerplate?style=flat-square&color=FED24C&label=%E2%AD%90"></a>
    <a href="https://github.com/prozilla-os/ProzillaOS-app-boilerplate"><img alt="Forks" src="https://img.shields.io/github/forks/prozilla-os/ProzillaOS-app-boilerplate?style=flat-square&color=4D9CFF&label=Forks&logo=github"></a>
    <a href="https://www.npmjs.com/package/prozilla-os"><img alt="NPM Version" src="https://img.shields.io/npm/v/prozilla-os?logo=npm&style=flat-square&label=prozilla-os&color=FF4D5B"></a>
  </p>
</div>

# ProzillaOS app boilerplate

This project contains boilerplate code for an app using the [`prozilla-os`][github] library. It uses React, Vite and TypeScript.

## Getting started

Requirements: **Node.js**

```sh
git clone https://github.com/prozilla-os/ProzillaOS-app-boilerplate.git my-app
cd ./my-app
npm install
npm run start
```

You can test your app with a demo website that will be available at [localhost:3000][localhost].

## Project structure

This is an overview of the most important files and folders in this project.

```
.
├── /public  ———————————  Static assets (favicons, images, fonts, ...)
│
├── /src
│   ├── /components  ———————  React components
│   │   ├── /demo  ——————————————  Main component of demo website to test app with
│   │   └── MyApp.tsx  ——————————  Main component of your app
│   ├── /config/demo  ——————  Config files for demo website
│   ├── /types  ————————————  TypeScript types
│   └── main.ts  ———————————  Main entry point that defines your app, including metadata
│
├── eslint.config.js  ——  Linting configurations
├── index.html  ————————  HTML file for demo websiet
├── package.json  ——————  Project metadata and dependencies
├── README.md  —————————  You are here
├── tsconfig.json  —————  TypeScript configurations
└── vite.config.ts  ————  Vite configurations
```

## Scripts

- `npm run start` - Starts the Vite development server at [localhost:3000][localhost].
- `npm run build` - Compiles the project using TypeScript and bundles all files into the `dist` folder.
- `npm run update` - Creates a new version.
- `npm run release` - Publishes the latest version to npm.

## Links

- [ProzillaOS][website]
- [Docs][docs]
- [GitHub][github]
- [npm][npm]
- [Ko-fi][ko-fi]

[website]: https://os.prozilla.dev/
[docs]: https://os.prozilla.dev/docs
[github]: https://github.com/prozilla-os/ProzillaOS
[npm]: https://www.npmjs.com/package/prozilla-os
[ko-fi]: https://ko-fi.com/prozilla
[localhost]: http://localhost:3000/
