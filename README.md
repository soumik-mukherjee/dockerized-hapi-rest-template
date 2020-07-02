<p align="center">
  <a href="https://github.com/soumik-mukherjee/dockerized-hapi-rest-template/actions?query=workflow%3Arelease"><img alt="javscript-action status" src="https://github.com/soumik-mukherjee/dockerized-hapi-rest-template/workflows/release/badge.svg"></a>
</p>

# What?

## The pots and the pans (for Ops and Architect people)

- Docker for Node - Node LTS (12.8 at time of writing) with Yarn 1.2.44. Executable container ready to work with your CICD tooling. Developers use the same container (with some subtle differences)
- BDD/TDD workflow from ground up

## The bells and whistles (for developers)

- HAPI - brings JOI, WRECK and other goddies
- ES6 - Go beyond Node LTS support for ES6 features
- Debug with swag - BYO Inspector (I use Chrome DevTools); the container supports a debug mode and source maps are set up for you too!
- No eject button - You don't need one, every bit of this boilerplate, you want to hack, is right in front of you.Use as-is or suit yourselves

# Show me how

## Begin

With,

- Grabbing the latest [release](https://github.com/soumik-mukherjee/dockerized-hapi-rest-template/releases) from this repo
- Unzipping to your dev workstation, & remove unnecessary stuff - the .github folder

## Write Code

By just,

- Adding all your RESTful API code in src/resources folder (there is a sample inside to get you started). Use HAPI and es6 features
- Then add HAPI server-side routes to your resources, in the app.js file (samples route setup here too)
- Then add your test code in the test folder (using HAPI Lab here)

## Debug Locally

- Build your dev docker image, with

```sh
yarn image:build-local
```

- Run a dev container, with

```sh
yarn container:run-local
```

- Connect your inspector to the debug port and open source files, add breakpoints, blah blah blah
  My setup: New Chrome Tab -> Type chrome://inspect in the address bar -> Wait till a new link (saying 'inspect') shows up under Remote Target -> Click on inspect

## Run Tests

With a simple yarn test command from the cli. Make sure your local container is working.

## Use CICD

Look at the .github/main.yaml file for a reference on most of the common tasks, if you are using Github Actions. Theres more to come in future, plan to add support for,

- Github Actions (the main.yaml with this repo is ok but not suited for everything, needs tweaking)
- Gitlab CICD
- Jenkins
- AWS - Code Build, Code Deploy
- Google - Cloud Build
- Azure - Whatever it is that they are calling it
