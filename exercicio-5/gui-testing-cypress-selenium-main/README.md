# GUI Testing - Cypress and Selenium
A starter kit for GUI testing the Sylius showcase with Cypress and Selenium.

You can install the sylius showcase with one docker container with this repository: [sylius-showcase-docker](https://github.com/mourats/sylius-showcase-docker).

Recomended capture-replay extension for Cypress.
[Cypress Scenario Recorder](https://chrome.google.com/webstore/detail/cypress-scenario-recorder/fmpgoobcionmfneadjapdabmjfkmfekb?hl=pt)


Recomended capture-replay extension for Selenium.
[Selenium IDE](https://chrome.google.com/webstore/detail/selenium-ide/mooikfkahbdckldjjndioackbalphokd)

It's neccessary to have browser firefox installed for execute the selenium scripts.
```
sudo apt install firefox
```

**It's neccessary to have Nodejs and Yarn installed.**

## Execute

First install the dependencies:

```
yarn install
```

**For execute the cypress scripts** you can use the cypress interface with:

```
yarn cypress
```

You can also run an unique test file in terminal:

```
yarn cypress:test-file cypress/e2e/products.cy.js
```

And finally you can execute the suite cypress with:

```
yarn cypress:test-suite
```

For execute selenium scripts you use this following commands:

```
yarn selenium:test-file selenium/e2e/payments.js
```

And for execute all suite:

```
yarn selenium:test-suite
```