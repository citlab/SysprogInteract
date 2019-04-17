# Requirements

You need to install the package manager [Yarn](https://yarnpkg.com/en/).

# Installation

Inside scheduling/ run

`> yarn install`

# Building

To build a development version run

`> yarn build`

Output is found in `main.bundle.js` and other `bundle.js` files.

For a production build run

`> yarn run build:prod`

# Deployment

You need the following files to be deployed on your favorite web server:

-   index.html
-   scheduling.css
-   scheduling.html
-   settings.css
-   settings.html
-   main.bundle.js
-   settings.bundle.js

# Developing

To run the dev server run the following command:

`> yarn start`

The Server will open a new tab in your default browser.

Alternatively run `yarn run watch` to use the watch mode of webpack which will recompile automatically on changes.
This alternative does not automatically refresh existing tabs.

# Notes

Handling of RAM resource shortage:

-   Processes without allocatable RAM will be shuffled to the end of the scheduling list.
-   The User can´t create Processes that exceed the RAM limit.
