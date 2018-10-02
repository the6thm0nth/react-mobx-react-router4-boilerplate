# React MobX React-Router 4 Boilerplate

### :tada: React, React-Router@next, MobX and Webpack 2.

## Description

This project is forked version of [mhaagens](https://github.com/mhaagens)'s [React MobX React-Router 4 Boilerplate](https://github.com/mhaagens/react-mobx-react-router4-boilerplate). I added and updated above things to here:

- Add Container/Component Concept
- Add HOC wrapper for authentication
- Add '@' alias to Webpack configuration
- Remove useless data at Store for authentication

## [Demo](https://mobx-boilerplate.the6thm0nth.net)

Just run `npm install` and `npm start`, then go to localhost:3000 to start developing.
To build, run `npm run build`, and to preview run `npm run preview`, then go
to localhost:1234 for the minified production bundle.

#### Async component loading

Components are now loaded async with react-router-loader and the store is injected via MobX Provider.
If you've downloaded this boilerplate before remember to run `npm install` again.

#### Read this if you've been using an earlier version of this boilerplate

- 10/02/18 - Forked. See `Description`
- 05/03/17 - Hot reloadable MobX stores
- 04/04/17 - Upgraded to React Router 4 @ latest
- 01/31/17 - Upgraded to React Router 4 Beta
- 01/28/17 - Routes are now loaded through [Lazy-Route](https://github.com/mhaagens/lazy-route).

### Todo

- [x] Async loading of components
- [x] Data fetching example
- [x] Protected Routes
