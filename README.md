# primeng [![build](https://travis-ci.org/daggerok/angular2.svg?branch=PrimeNG)](https://travis-ci.org/daggerok/angular2)

update npm versions

```bash
npm i -g npm-check-updates
# currently we dont want update to latest broken package...
ncu -u -x @types/core-js @types/node
```

bundle angular 2 application using webpack2

```bash
npm i
npm t
npm start
npm run lint
npm run build
npm run compile
npm run webpack
npm run serve
```

but angular-cli for code generation

```bash
cd src/app
ng g c my-component
```

links:
- [PrimeNG](http://www.primefaces.org/primeng/#/)
- [Webpacl 2](https://webpack.js.org/)
- [Angular 2](https://angular.io/)
