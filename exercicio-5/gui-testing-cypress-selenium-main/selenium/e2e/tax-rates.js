const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('tax rates', () => {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('firefox').build();
  });

  after(async () => {
    await driver.quit();
  });

  beforeEach(async () => {
    driver.manage().deleteAllCookies();
    await driver.get('http://localhost:9990/admin');
    // await driver.get('http://150.165.75.99:9990/admin');
    await driver.findElement(By.id('_username')).sendKeys('sylius');
    await driver.findElement(By.id('_password')).sendKeys('sylius');
    await driver.findElement(By.css('.primary')).click();
    // await driver.sleep(1000);
  });

  // Remove .only and implement others test cases!
  it.only('validate filter applied through cancel button', async () => {
    // Click in tax rates in side menu
    await driver.findElement(By.linkText('Tax rates')).click();

    // Type in value input to search for specify tax rate
    await driver.findElement(By.id('criteria_search_value')).sendKeys('7');

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Click in edit of the last tax rate
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon button "]'));
    await buttons[buttons.length - 1].click();

    // Click on cancel button
    await driver.findElement(By.css('.admin-layout__content > .ui > .ui > .ui > .ui:nth-child(2)')).click();

    // Assert that we are back to the listing page with the filter applied
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Clothing Sales Tax 7%'));
    assert(!bodyText.includes('Sales Tax 20%'));
  });

  it('test case 2', async () => {
    // Implement your test case 2 code here
  });

  it('test case 3', async () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
