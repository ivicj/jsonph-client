# JsonphClient
> Proof of concept Angular 11 application 

## Table of contents
* [Description](#description)
* [Screenshot](#screenshot)
* [Requirements](#requirements)
* [Project structure](#project-structure)
* [Development server](#development-server)
* [Code scaffolding](#code-scaffolding)
* [Build](#build)
* [Running unit tests](#running-unit-tests)
* [Running end-to-end tests](#running-end-to-end-tests)
* [Further help](#further-help)

## Description

This is Angular application that uses jsonplaceholder API to fetch 100 posts and render them all where each post is in a separate component and displayed as squares, 10 rows x 10 columns. By default, the post id is shown in a sqare. When clicking on the square: the post id is replaced with the user id. When clicking again the post id is shown again and so on.

I've already implemented the RxJS version of this project a few months ago. Please, feel free to check out my [ngRx store implementation](https://github.com/ivicj/practice)

## Screenshot

![image](https://user-images.githubusercontent.com/16215654/111970323-73d9a580-8afb-11eb-9840-f6782b6789ab.png)

## Requirements

This project was generated with:
- [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.
- [Node.js](https://nodejs.org/download/release/latest-v14.x/) version 14.16.0
  - To confirm version run `node -v` in a terminal window.
- [npm package manager](https://www.npmjs.com/package/npm/v/7.6.3) version 7.6.3
  - To confirm version run `npm -v` in a terminal window.

## Project structure

This project consists of frontend applicaton.
Notable folders:
- components\card - Card component, shows post information. HostBinding is used for animation to add css class animation in order to trigger [flip animation](https://animista.net/play/basic/flip/flip-vertical-fwd) on click event.
- services\post - Gets all posts from jsonplaceholder api.
- model - Holds post model.
- app.component - Calls service to fetch data and renders them.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
