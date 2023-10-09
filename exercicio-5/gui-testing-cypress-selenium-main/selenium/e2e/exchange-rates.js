const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('exchange rates', () => {
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
  it.only('create a new exchange rate between USD and EUR', async () => {
    // Click in exchange rates in side menu
    await driver.findElement(By.linkText('Exchange rates')).click();

    // Click on create button
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon button  primary "]'));
    await buttons[0].click();

    // Select US Dollar Source currency
    const dropdown = await driver.findElement(By.id('sylius_exchange_rate_sourceCurrency'));
    await dropdown.findElement(By.xpath("//option[. = 'US Dollar']")).click();

    // Type ratio to 5
    await driver.findElement(By.id('sylius_exchange_rate_ratio')).sendKeys('5');

    // Click on create button
    const buttonToCreate = await driver.findElements(By.css('*[class^="ui labeled icon primary button"]'));
    await buttonToCreate[0].click();

    // Assert that exchange rate has been created
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Exchange rate has been successfully created.'));
  });

  it('test case 2', async () => {
    // Implement your test case 2 code here
  });

  it('test case 3', async () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
